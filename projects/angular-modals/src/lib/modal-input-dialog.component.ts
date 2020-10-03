import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ButtonStyle } from './button-style';
import { IModalDialog } from './modal-dialog';

@Component({
    templateUrl: './modal-input-dialog.component.html',
    styleUrls: ['./modal-input-dialog.component.scss', './modal-overlay.scss']
  })
  export class ModalInputDialogComponent implements OnInit, OnDestroy, IModalDialog<string> {

    @Output() dialogResult: Subject<string>;

    title: string;
    text: string;
    inputText: string;
    okButtonText = 'Ok';
    okButtonStyle = ButtonStyle.Primary;
    cancelButtonText = 'Cancel';
    cancelButtonStyle = ButtonStyle.Default;
    maxInputLength: number;

    setup(title: string,
          text: string,
          okButtonText: string,
          cancelButtonText: string,
          okButtonStyle: ButtonStyle,
          cancelButtonStyle: ButtonStyle,
          defaultInputText = '',
          maxInputLength: number = null) {

      this.title = title;
      this.text = text;
      this.okButtonText = okButtonText;
      this.cancelButtonText = cancelButtonText;
      this.okButtonStyle = okButtonStyle;
      this.cancelButtonStyle = cancelButtonStyle;
      this.inputText = defaultInputText;
      this.maxInputLength = maxInputLength;

      this.dialogResult = new Subject<string>();

    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

      this.dialogResult.complete();

    }

    onSubmit() {

      this.dialogResult.next(this.inputText);
      this.dialogResult.complete();

    }

    onCancelClick() {

      this.dialogResult.next(null);
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
