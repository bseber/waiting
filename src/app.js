import React from "react";
import Waiting from "./waiting";

export default class App extends React.Component {
    static initialState = {
        loading: false,
        data: null,
    };

    state = App.initialState;

    handleFetch(event) {
        this.setState({ loading: true, data: null });
        window.setTimeout(() => {
            this.setState({ loading: false, data: ["Bruce", "Clark"] });
        }, 2500);
    }

    render() {
        const { loading, data } = this.state;
        return (
            <React.Fragment>
                <Waiting loading={loading} />
                {data && <ul>{data.map(hero => <li key={hero}>{hero}</li>)}</ul>}
                <button onClick={event => this.handleFetch(event)}>start fetching</button>
            </React.Fragment>
        );
    }
}
