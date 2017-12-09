import React from "react";

export default class Waiting extends React.Component {
    static defaultProps = {
        loading: true,
        render: () => null,
    };

    constructor(props) {
        super();
        this.state = { loading: props.loading, inDecision: false };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading !== this.props.loading) {
            window.clearTimeout(this._loadingTimeout);
            if (nextProps.loading) {
                this.setState({ inDecision: true });
                this._loadingTimeout = window.setTimeout(() => {
                    this.setState({
                        loading: nextProps.loading,
                        inDecision: false,
                    });
                }, 100);
            } else {
                this.setState({
                    loading: false,
                    inDecision: false,
                });
            }
        }
    }

    renderContent() {
        if (this.state.inDecision) {
            return null;
        } else if (this.state.loading) {
            return <div>loading...</div>;
        } else {
            return this.props.render();
        }
    }

    render() {
        return this.renderContent();
    }
}
