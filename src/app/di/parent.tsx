import React from 'react';

export default class extends React.Component {
    render() {
        console.log(this.context)
        return (
            <div>
                <p>parent</p>
                di get type: {this.context.get({})}
                {this.props.children}
            </div>
        )
    }
}