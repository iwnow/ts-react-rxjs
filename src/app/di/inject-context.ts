import React from "react";

const injector = {
    get: (type) => 'hello di'
}

export const context = React.createContext<any>(injector);

export function withContext(...targets) {
    (targets || []).forEach(target => {
        target.contextType = context
    });
    return targets;
}

export function contextable(target) {
    withContext(target);
}