import React from "react";

class RickMorty extends React.Component{
    state = {
        page: 1,
        loading: true,
        error: null,
        data: {
            results: []
        }
    };

    componentDidMount() {
        this.fetchCharacters()
    }

    fetchCharacters = async() => {
        this.setState({loading: true, error: null});

        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`);

        const data = await response.json();

        this.setState({
            loading: false,
            page: this.state.page + 1,
            data: {
                info: data.info,
                results: [...this.state.data.results, ...data.results]
            }
        });
    };

    render() {
        return (
            <div className="container">
                <h3 className="mt-3 mb-3 text-center">Rick and Morty</h3>

                {this.state.loading && (
                    <p className="text-center">Loading...</p>
                )}

                <ul className="row">
                    {this.state.data.results.map(element => {
                        return (
                            <li className="list-unstyled col-md-3 mb-3" key={element.id}>
                                <div className="card">
                                    <div className="card-title text-center">
                                        {element.name}
                                    </div>

                                    <div className="card-body">
                                        <img src={element.image} className="img-thumbnail img-fluid"/>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                {!this.state.loading && (
                    <button onClick={() => this.fetchCharacters()} className="btn btn-success btn-block">See More</button>
                )}
            </div>
        );
    }
}

export default RickMorty;