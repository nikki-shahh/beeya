import React from "react";
import './WelcomeScreen.css';
import logo from './logo.png';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <h1>Welcome to Where 2 Bee </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h4>
                    Log in to see upcoming events
                    <br /><br></br>
                    around the world for full-stack developers
                </h4>
                <div className="button_cont" align="center">
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                                alt="Google sign-in"
                            />
                        </div>
                        <button onClick={() => { props.getAccessToken() }}
                            rel="nofollow noopener"
                            className="btn-text"
                        >
                            <b>Sign in with google</b>
                        </button>
                    </div>
                </div>
                <a
                    href="https://nikki-shahh.github.io/where2bee/privacy.html"
                    rel="nofollow noopener"
                >
                    Privacy policy
                </a>
            </div>
        )
        : null
}
export default WelcomeScreen;