import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


//contructor
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            // Giao diện login
            <div className="login-background"> 
            <div className="login-container">
                <div className="login-content row">
                    <div className="col-12 text-login">Login</div>
                    <div className="col-12 form-group login-input">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="Enter your username"/>
                    </div>
                    <div className="col-12 form-group login-input">
                        <label>Password:</label>
                        <input type="text" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="col-12">
                        <Link to="/home"><button className="btn-login">Login</button></Link>
                    
                    </div>
                    <div className="col-12">
                        <span className="forgot-password">Forgot your password?</span>
                    </div>
                    <div className="col-12 text-center mt-3">
                       <span className="text-other-login">Or login with:</span>
                    </div>
                    <div className="col-12 social-login">
                      <i className="fab fa-google-plus-g google"></i>
                      <i className="fab fa-facebook-f facebook"></i>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
// hàm redex
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);