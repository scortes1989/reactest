import React from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class NewBadge extends React.Component {
    state = {
        form: {
            first_name: '',
            last_name: '',
            title: '',
            twitter: ''
        }
    };

    setValue = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <Badge
                            form={this.state.form}>
                        </Badge>
                    </div>

                    <div className="col">
                        <BadgeForm
                            onChange={this.setValue}
                            form={this.state.form}>
                        </BadgeForm>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge;