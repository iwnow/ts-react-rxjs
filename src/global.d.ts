import React = require('react');
import ReactDOM = require('react-dom');
import rxjs = require('@node_modules/rxjs');
import rxjsOps = require('@node_modules/rxjs/operators');

declare global {
    type RxJsType = typeof rxjs;
    type RxJsOperatorsType = {
        operators: typeof rxjsOps
    };

    interface Window {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        rxjs: RxJsType | RxJsOperatorsType;
    }
}