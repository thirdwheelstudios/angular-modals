import { Subject } from 'rxjs';

export interface IModalDialog<TResult> {
    dialogResult: Subject<TResult>;
}
