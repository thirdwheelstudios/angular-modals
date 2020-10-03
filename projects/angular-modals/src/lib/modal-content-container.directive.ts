import { Directive, ViewContainerRef, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[3w-modal]' })
export class ModalContentContainerDirective implements OnInit {

  constructor(private readonly vcr: ViewContainerRef, private readonly modalService: ModalService) {

  }

  ngOnInit(): void {

    this.modalService.setupViewContainer(this.vcr);

  }

}
