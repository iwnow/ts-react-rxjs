import { Observable } from '@node_modules/rxjs/internal/Observable';
import { ObservableInput, SchedulerLike } from '@node_modules/rxjs/internal/types';

const rxjs: RxJsType = <RxJsType>window.rxjs;

export default rxjs;

export {
    Observable,
    ObservableInput,
    SchedulerLike
}