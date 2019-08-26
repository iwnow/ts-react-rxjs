import React from 'react';

import Parent from './parent';
import Child from './child';
import { contextable, withContext, context } from './inject-context';

withContext(Parent, Child);

@contextable
class DiExample extends React.Component {
    render() {
        return (
            <context.Provider value={{ get: (type?) => 'ok' }}>
                <Parent>
                    <Child />
                </Parent>
            </context.Provider>
        )
    }
}

export default DiExample;