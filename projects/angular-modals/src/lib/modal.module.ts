import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalContentContainerDirective } from './modal-content-container.directive';
import { ModalDialogComponent } from './modal-dialog.component';
import { ModalInputDialogComponent } from './modal-input-dialog.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    ModalDialogComponent,
    ModalInputDialogComponent,
    ModalContentContainerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ModalContentContainerDirective
  ],
  providers: [
    ModalService,
    ModalContentContainerDirective
  ]
})
export class ModalModule {

}
