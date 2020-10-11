import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalContentContainerComponent } from './modal-content-container.component';
import { ModalContentContainerDirective } from './modal-content-container.directive';
import { ModalDialogComponent } from './modal-dialog.component';
import { ModalInputDialogComponent } from './modal-input-dialog.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    ModalDialogComponent,
    ModalInputDialogComponent,
    ModalContentContainerDirective,
    ModalContentContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ModalContentContainerDirective,
    ModalContentContainerComponent
  ],
  providers: [
    ModalService,
    ModalContentContainerDirective
  ]
})
export class ModalModule {

}
