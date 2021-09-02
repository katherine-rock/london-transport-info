import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { road: '' }
        this.handleRoadChange = this.handleRoadChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleShowAll = this.handleShowAll.bind(this);
    }

    // Method to update the value entered in the search input field 
    handleRoadChange(event) {
        this.setState({ road: event.target.value })
    }

    // Method to execute the search and pass in the current state of 'road' search term
    handleSearch(event) {
        this.props.searchTFL(this.state.road);
        event.preventDefault();
    }

    // Method to execute the search with 'all' passed in as the search term
    handleShowAll(event) {
        this.props.searchTFL('all');
        event.preventDefault();
    }

    render () {
        return (
            <div className="w-screen flex flex-col justify-center content-center place-items-center">

                <button
                    data-cy="show-all-button"  
                    onClick={this.handleShowAll}
                    className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Show all traffic incidents
                </button>

                <h3 className="m-4">--- OR ---</h3>

                <div className="m-4">
                    <h3>Search by road</h3>
                    <input
                        id="roadsearch"
                        className="p-2 border-blue-700 focus:border-blue-400 hover:border-blue-500" 
                        placeholder="Enter road number"
                        onChange={this.handleRoadChange} />
                </div>

                <div>
                    <button 
                        data-cy="search-road-button"  
                        onClick={this.handleSearch} 
                        className="mr-4 ml-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 focus:border-blue-400 rounded ">
                        Search by road number
                    </button>
                </div>

                <div className="m-4 md:max-w-md lg:max-w-md">
                    <p>Tip: Enter a road number (like "A2") or multiple road numbers separated by a comma (like "A2, A406").</p>
                </div>

            </div>
        )
    }
}

export default SearchBar;