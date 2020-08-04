import React from 'react';
import './App.scss';

class App extends React.Component {

    state = {
        isClicked: false,
    };

    onClicked = () => {
        this.setState(prevState => {
            return{
                isClicked: !prevState.isClicked,
            }
        })
    };

    render() {
        return (
            <div className="container">
                <h1 className="app-heading" onClick={this.onClicked}>{this.state.isClicked ? 'Hello World' : 'Hello Slobodan'}</h1>
            </div>
        );
    }
}

export default App;