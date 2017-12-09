import React from "react";

export default class Waiting extends React.Component {
    static defaultProps = {
        loading: true,
        render: () => null,
    };

    constructor(props) {
        super();
        this.state = { loading: props.loading, content: null };
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

    componentDidMount() {
        this.updateContent();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loading !== prevState.loading) {
            this.updateContent();
        }
    }

    updateContent() {
        this.setState({ content: this.state.loading ? <div>loading...</div> : this.props.render() });
    }

    render() {
        return this.state.content;
    }
}
