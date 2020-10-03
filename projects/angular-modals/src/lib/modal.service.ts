import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ButtonStyle } from './button-style';
import { IModalDialog } from './modal-dialog';
import { ModalDialogComponent } from './modal-dialog.component';
import { ModalInputDialogComponent } from './modal-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private vcr: ViewContainerRef;

  constructor(private readonly cfr: ComponentFactoryResolver) {

  }

  setupViewContainer(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }

  showModal<T extends IModalDialog<TResult>, TResult>(modal: Type<T>) {

    const component = this.createComponent(modal);

    return this.setupResult<T, TResult>(component);

  }

  yesNo(
    text: string,
    title: string = 'Convey',
    yesButtonStyle: ButtonStyle = ButtonStyle.Primary,
    noButtonStyle: ButtonStyle = ButtonStyle.Default) {

    return this.showDialog(text, title, 'Yes', 'No', yesButtonStyle, noButtonStyle);

  }

  confirm(text: string,
          title: string = 'Convey',
          okButtonText: string = 'Ok',
          cancelButtonText: string = 'Cancel') {

    return this.showDialog(text, title, okButtonText, cancelButtonText, ButtonStyle.Primary, ButtonStyle.Default);

  }

  warning(warningText: string,
          title: string = 'Convey') {

    return this.showDialog(warningText, title, 'Ok', '', ButtonStyle.Warning, ButtonStyle.Default);

  }

  error(errorText: string,
        title: string = 'Convey') {

    return this.showDialog(errorText, title, 'Ok', '', ButtonStyle.Error, ButtonStyle.Default);

  }

  input(text: string,
        title: string = 'Convey',
        okButtonText: string = 'Ok',
        cancelButtonText: string = 'Cancel',
        defaultInputText = '',
        maxInputLength: number = null) {

    const component = this.createComponent(ModalInputDialogComponent);

    component.instance.setup(title, text, okButtonText, cancelButtonText,
      ButtonStyle.Primary, ButtonStyle.Default, defaultInputText, maxInputLength);

    return this.setupResult<IModalDialog<string>, string>(component);

  }

  private showDialog(text: string,
                     title: string,
                     okButtonText: string,
                     cancelButtonText: string,
                     okButtonStyle: ButtonStyle,
                     cancelButtonStyle: ButtonStyle) {

    const component = this.createComponent(ModalDialogComponent);

    component.instance.setup(title, text, okButtonText, cancelButtonText, okButtonStyle, cancelButtonStyle);

    return this.setupResult<IModalDialog<boolean>, boolean>(component);

  }

  private createComponent<T extends IModalDialog<TResult>, TResult>(componentToCreate: Type<T>) {

    const factory = this.cfr.resolveComponentFactory<T>(componentToCreate);

    return this.vcr.createComponent(factory);

  }

  private setupResult<T extends IModalDialog<TResult>, TResult>(component: ComponentRef<T>) {

    const observable = component.instance.dialogResult.pipe(
      finalize(() => {
        component.destroy();
      })
    );

    return observable;

  }

}
