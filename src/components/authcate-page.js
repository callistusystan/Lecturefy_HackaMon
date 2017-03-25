import React from 'react';
import LogoMonash from '../drawables/logo-monash.svg';
import BackgroundMonashAuthcate from '../drawables/background-authcate-monash.png';
import '../css/authcate-page.css';
import {Link} from 'react-router';
class AuthcatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onUsernameChange(event) {
        this.setState({username: event.target.value});
    }
    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div className="container-fluid authcate-container h-match-parent">
                <div className="row h-match-parent">
                    <section className="col-md-7 col-sm-6 col-xs-0 authcate-side-hero">
                        <div className="row">
                            <img className="h-match-parent w-match-parent" src={BackgroundMonashAuthcate}/>
                        </div>
                    </section>
                    <div className="col-md-5 col-sm-6 col-xs-12 authcate-sidebar">
                        <div>
                            <img className="auth-monash-logo" src={LogoMonash}/>
                            <p className="padding-md-v">Sign in with your Monash email address</p>
                            <form className="form-group">
                                <div className="input-group w-match-parent input-authcate">
                                    <input type="text" className="form-control" placeholder="Username" onChange={this.onChangeUsernmae}/>
                                </div>
                                <div className="input-group w-match-parent">
                                    <input type="text" className="form-control" placeholder="Password" onChange={this.onChangePassword}/>
                                </div>
                                <Link to={{pathname:"/presentation",  query:{username: this.state.username, password: this.state.password}}}>
                                    <button type="button" className="btn bt-lg btn-sign-up">Sign up</button>
                                </Link>
                            </form>
                            <p><a href="https://google.com" className="text-link-colored">Change Password</a></p>
                            <p><a href="https://google.com" className="text-link-colored">Forgot your Password?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AuthcatePage;
