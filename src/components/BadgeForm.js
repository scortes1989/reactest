import React from "react";

class BadgeForm extends React.Component {
    submit = e => {
        e.preventDefault();
        console.log(this.props.form);
    };

    render() {
        return (
            <form className="form mt-5" onSubmit={this.submit}>
                <div className="col-md-12 col-xs-12">
                    <label>First Name</label>
                    <input onChange={this.props.onChange} value={this.props.form.first_name}
                           name="first_name" type="text" className="form-control" />
                </div>

                <div className="col-md-12 col-xs-12">
                    <label>Last Name</label>
                    <input onChange={this.props.onChange} value={this.props.form.last_name}
                           name="last_name" type="text" className="form-control" />
                </div>

                <div className="col-md-12 col-xs-12">
                    <label>Title</label>
                    <input onChange={this.props.onChange} value={this.props.form.title}
                           name="title" type="text" className="form-control" />
                </div>

                <div className="col-md-12 col-xs-12">
                    <label>Twitter</label>
                    <input onChange={this.props.onChange} value={this.props.form.twitter}
                           name="twitter" type="text" className="form-control" />
                </div>

                <button
                    type="submit"
                    className="mt-2 btn btn-success btn-block">
                    Submit
                </button>
            </form>
        );
    }
}

export default BadgeForm;