import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ButtonStyle } from './button-style';
import { IModalDialog } from './modal-dialog';

@Component({
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss', './modal-overlay.scss']
})
export class ModalDialogComponent implements OnInit, OnDestroy, IModalDialog<boolean> {

  @Output() dialogResult: Subject<boolean>;

  title: string;
  text: string;
  okButtonText = 'Ok';
  okButtonStyle = ButtonStyle.Primary;
  cancelButtonText = 'Cancel';
  cancelButtonStyle = ButtonStyle.Default;

  setup(title: string,
        text: string,
        okButtonText: string,
        cancelButtonText: string,
        okButtonStyle: ButtonStyle,
        cancelButtonStyle: ButtonStyle) {

    this.title = title;
    this.text = text;
    this.okButtonText = okButtonText;
    this.cancelButtonText = cancelButtonText;
    this.okButtonStyle = okButtonStyle;
    this.cancelButtonStyle = cancelButtonStyle;

    this.dialogResult = new Subject<boolean>();

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

    this.dialogResult.complete();

  }

  onSubmit() {

    this.dialogResult.next(true);
    this.dialogResult.complete();

  }

  onCancelClick() {

    this.dialogResult.next(false);
    this.dialogResult.complete();

  }

  onOverlayClick(event: MouseEvent) {

    event.stopPropagation();

    this.dialogResult.next(null);
    this.dialogResult.complete();

  }

  onDialogClick(event: MouseEvent) {

    event.stopPropagation();

  }

  getButtonStyle(value: ButtonStyle) {

    if (value === ButtonStyle.Default) { return ''; }

    return `button-${ButtonStyle[value].toLowerCase()}`;

  }

}
