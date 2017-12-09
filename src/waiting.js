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
            this.setState({ loading: nextProps.loading });
        }
    }

    render() {
        return this.state.loading ? <div>loading...</div> : null;
    }
}
