import React = require('react');
import ReactDOM = require('react-dom');
import rxjs = require('@vendor/rxjs');
import rxjsOps = require('@vendor/rxjs/operators');

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