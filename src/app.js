import React from "react";
import Waiting from "./waiting";

export default class App extends React.Component {
    static initialState = {
        loading: true,
        data: null,
        timeout: 2500,
    };

    state = App.initialState;

    componentDidMount() {
        this._updateTimeout = window.setTimeout(() => {
            this.setState({ loading: false, data: ["Bruce", "Clark"] });
        }, 1000);
    }

    handleFetch(event) {
        this.setState({ loading: true, data: null });
        window.clearTimeout(this._updateTimeout);
        this._updateTimeout = window.setTimeout(() => {
            this.setState({ loading: false, data: ["Bruce", "Clark"] });
        }, this.state.timeout);
    }

    handleCachedData(event) {
        this.setState({ loading: false, data: ["apple", "banana", "pear"] });
    }

    handleTimeoutChange(event) {
        this.setState({ timeout: event.target.value });
    }

    render() {
        const { loading, data, timeout } = this.state;
        return (
            <React.Fragment>
                <button id="cachedButton" onClick={event => this.handleCachedData(event)}>
                    new data withoud loading (e.g. cached data)
                </button>
                <button id="fetchButton" onClick={event => this.handleFetch(event)}>
                    start fetching with timeout (ms):
                </button>
                <input type="number" value={timeout} onChange={event => this.handleTimeoutChange(event)} />
                <Waiting loading={loading} render={() => <ul>{data.map(hero => <li key={hero}>{hero}</li>)}</ul>} />
            </React.Fragment>
        );
    }
}
