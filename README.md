# angular-modals
Lightweight library for creating modal dialogs in [Angular](https://angular.io/).

The library provides support for simple Yes/No, Confirm, Warning and Error dialogs out of the box. Custom modal dialog components can be created by implementing the `IModalDialog` interface. See [Creating Custom Dialogs](https://github.com/thirdwheelstudios/angular-modals/wiki/Creating-Custom-Dialogs) for more information.

## Installation

```bash
npm install @thirdwheel-studios/angular-modals
```

## Quick Start

1. Import The `ModalModule` into your application, i.e. `AppModule`.

```ts
import { ModalModule } from '@thirdwheel-studios/angular-modals';

@NgModule({
  declarations: [],
  imports: [ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
2. Attach a `3w-modal` directive to your application. i.e:

```html
<ng-template 3w-modal></ng-template>
```

3. Where required, inject `ModalService` into your components. i.e:

```ts
import { Component } from '@angular/core';
import { ModalService } from '@thirdwheel-studios/angular-modals';

@Component({
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent {

  constructor(private readonly modalService: ModalService) {

  }
}
```

4. Use the dialogs as follows:

```ts
this.modalService.yesNo('Do you really want to do this?')
  .subscribe(yesDoItNow => {

    if (yesDoItNow)
      console.log('Okay then, if you insist');

  });

this.modalService.confirm('We just did something')
  .subscribe();

this.modalService.warning('This is not good')
  .subscribe();

this.modalService.error('This is REALLY not good')
  .subscribe();
```
