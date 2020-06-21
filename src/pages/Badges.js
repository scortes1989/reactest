import React from "react";

import {Link} from "react-router-dom/";

import BadgeList from "../components/BadgeList";

class Badges extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                        firstName: 'Freda',
                        lastName: 'Grady',
                        email: 'Leann_Berge@gmail.com',
                        jobTitle: 'Legacy Brand Director',
                        twitter: 'FredaGrady22221-7573',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    },
                    {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                        firstName: 'Major',
                        lastName: 'Rodriguez',
                        email: 'Ilene66@hotmail.com',
                        jobTitle: 'Human Research Architect',
                        twitter: 'MajorRodriguez61545',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                    },
                    {
                        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                        firstName: 'Daphney',
                        lastName: 'Torphy',
                        email: 'Ron61@hotmail.com',
                        jobTitle: 'National Markets Officer',
                        twitter: 'DaphneyTorphy96105',
                        avatarUrl:
                            'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                    }
                ]
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutId);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <Link to="/badges/new" className="btn btn-primary float-right">New Badge</Link>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <BadgeList badges={this.state.data}></BadgeList>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;