import React from 'react';

export default class extends React.Component {

    render() {
        return (
            <div>
                <p>child</p>
                di get type: {this.context.get({})}
            </div>
        )
    }
}