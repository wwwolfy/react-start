import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
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
                <button onClick={() => this.props.storeData('test')}>Store</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    storeData: payload => dispatch({type: actionTypes.STORE_DATA, payload}),
});

export default connect(null, mapDispatchToProps)(App);