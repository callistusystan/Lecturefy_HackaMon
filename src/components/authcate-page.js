import React from 'react';
import LogoMonash from '../drawables/logo-monash.svg';
import BackgroundMonashAuthcate from '../drawables/background-monash-authcate.png';
class AuthcatePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <section className="col-md-8">
                    <img src={BackgroundMonashAuthcate}/>
                </section>
                <form className="input-group col-md-4">
                    <input type="text" class="form-control" placeholder="Username"/>
                    <input type="text" class="form-control" placeholder="Password"/>
                    <h1>Callistus Tan the God of Dank Memes</h1>
                </form>
            </div>
        );
    }
}
export default AuthcatePage;
