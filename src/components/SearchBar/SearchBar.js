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
            <div class="SearchBar">

                <button onClick={this.handleShowAll}>Show all traffic incidents</button>

                <div class="SearchBar-fields">
                    <h3>Search by road</h3>
                    <input 
                        placeholder="Road number"
                        onChange={this.handleRoadChange} />
                </div>

                <div class="SearchBar-submit">
                    <button onClick={this.handleSearch} >Search</button>
                </div>

                <div>
                    <p>To search for disruptions on one road, enter the road number in the search bar. For example: A406</p>
                    <p>To search for multiple roads at once, use a comma between each road number. For example: A406, A2</p>
                </div>

            </div>
        )
    }
}

export default SearchBar;