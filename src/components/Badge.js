import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';

class Badge extends React.Component {
    render() {
        return (
            <div className="text-center mt-5">
                <div>
                    <img className="img-thumbnail" src={logo} alt="logo" />
                </div>

                <div>
                    <h1>Mi nombre es {this.props.form.first_name} {this.props.form.last_name}</h1>
                </div>

                <div>
                    <p>{this.props.form.title}</p>
                    <p>Twitter: @{this.props.form.twitter}</p>
                </div>
            </div>
        );
    }
}

export default Badge;