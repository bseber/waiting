import React from "react";

export default class Waiting extends React.Component {
    static defaultProps = {
        loading: true,
    };
    render() {
        return this.props.loading ? <div>loading...</div> : null;
    }
}
