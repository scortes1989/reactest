import React from "react";

class BadgeList extends React.Component{
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(element => {
                    return (
                        <li key={element.id}>
                            <div className="card mt-2">
                                <div className="card-header">
                                    <h3 className="card-title">{element.firstName} {element.lastName}</h3>
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img className="img-thumbnail img-fluid" src={element.avatarUrl} alt="User"/>
                                        </div>

                                        <div className="col-md-6">
                                            <p>Twitter: {element.twitter}</p>
                                            <p>Title: {element.jobTitle}</p>
                                            <p>E-mail: {element.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgeList;