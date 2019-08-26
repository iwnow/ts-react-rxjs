import { Observable } from '@vendor/rxjs/internal/Observable';
import { ObservableInput, SchedulerLike } from '@vendor/rxjs/internal/types';

const rxjs: RxJsType = <RxJsType>window.rxjs;

export default rxjs;

export {
    Observable,
    ObservableInput,
    SchedulerLike
}