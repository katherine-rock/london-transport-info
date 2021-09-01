import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { road: '' }
        this.handleRoadChange = this.handleRoadChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleShowAll = this.handleShowAll.bind(this);
    }

    handleRoadChange(event) {
        this.setState({ road: event.target.value })
    }

    handleSearch(event) {
        this.props.searchTFL(this.state.road);
        event.preventDefault();
    }

    handleShowAll(event) {
        this.props.searchTFL('all');
        event.preventDefault();
    }

    render () {
        return (
            <div>

                <button 
                    onClick={this.handleShowAll}
                    className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Show all traffic incidents
                </button>

                <div className="m-4">
                    <h3>Search by road</h3>
                    <input 
                        placeholder="Road number"
                        onChange={this.handleRoadChange} />
                </div>

                <div class="SearchBar-submit">
                    <button 
                        onClick={this.handleSearch} 
                        className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Search
                    </button>
                </div>

                <div className="m-4">
                    <p>Hints</p>
                    <p>To search for disruptions on one road, enter the road number in the search bar. For example: A406</p>
                    <p>To search for multiple roads at once, use a comma between each road number. For example: A406, A2</p>
                </div>

            </div>
        )
    }
}

export default SearchBar;