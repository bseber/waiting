import React from "react";
import Waiting from "./waiting";

export default class App extends React.Component {
    static initialState = {
        loading: false,
        data: null,
        timeout: 2500,
    };

    state = App.initialState;

    handleFetch(event) {
        this.setState({ loading: true, data: null });
        window.setTimeout(() => {
            this.setState({ loading: false, data: ["Bruce", "Clark"] });
        }, this.state.timeout);
    }

    handleTimeoutChange(event) {
        this.setState({ timeout: event.target.value });
    }

    render() {
        const { loading, data, timeout } = this.state;
        return (
            <React.Fragment>
                <Waiting loading={loading} />
                {data && <ul>{data.map(hero => <li key={hero}>{hero}</li>)}</ul>}
                <button onClick={event => this.handleFetch(event)}>start fetching with timeout (ms):</button>
                <input type="number" value={timeout} onChange={event => this.handleTimeoutChange(event)} />
            </React.Fragment>
        );
    }
}
