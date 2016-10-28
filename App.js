/**
 * @Author: Wilson Ndirangu <wndirangu>
 * @Date:   2016-10-28T19:09:57+03:00
 * @Email:  wnwillyndirangu@gmail.com
* @Last modified by:   wndirangu
* @Last modified time: 2016-10-28T21:52:24+03:00
 * @License: MIT
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let txt = this.props.txt
        return <h1 > {
            txt
        } < /h1>

    }
}

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number
}

App.defaultProps = {
    txt: "This is the default props"
}

ReactDOM.render( < App txt = "This is me doing ma thing" / > , document.getElementById('App'))

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "this is the state"
        }

    }
    update(e) {

        this.setState({
            txt: e.target.value
        })


    }
    render() {
        return ( < div >
            <
            input type = "text"
            onChange = {
                this.update.bind(this)
            }
            /> <
            h1 > {
                this.state.txt
            } < /h1> < /
            div >
        );
    }
}
export default State
