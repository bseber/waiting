import React from "react";

export default class Waiting extends React.Component {
    static defaultProps = {
        loading: true,
    };

    constructor(props) {
        super();
        this.state = { loading: props.loading };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading !== this.props.loading) {
            window.clearTimeout(this._loadingTimeout);
            this._loadingTimeout = window.setTimeout(() => {
                this.setState({ loading: nextProps.loading });
            }, 100);
        }
    }

    render() {
        return this.state.loading ? <div>loading...</div> : null;
    }
}
