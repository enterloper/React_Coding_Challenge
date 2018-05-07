import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PanelA from './Components/panelA';
import PanelB from './Components/panelB';
import Header from './Components/header';


class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header />
                <PanelA />
                <PanelB />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));