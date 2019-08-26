import rx from '@libs/rxjs';
import op from '@libs/rxjs/operators';
import React from 'react';

const source$ = rx.interval(1000).pipe(
    op.startWith(0),
    op.map(n => `get ${n}`),
);

export default class RxComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { v: '' };
    }
    
    destroy$ = new rx.Subject();
    
    componentDidMount() {
        source$.pipe(op.takeUntil(this.destroy$))
            .subscribe(v => this.setState(() => {
                return { v };
            }))
    }

    componentWillUnmount() {
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy$ = null;
    }
    
    render() {
        return <div>rx state: {this.state.v}</div>
    }
}