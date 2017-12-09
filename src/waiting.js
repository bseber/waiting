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
            if (nextProps.loading) {
                this._loadingTimeout = window.setTimeout(() => {
                    this.setState({ loading: nextProps.loading });
                }, 100);
            } else {
                this.setState({ loading: false });
            }
        }
    }

    render() {
        return this.state.loading ? <div>loading...</div> : null;
    }
}
