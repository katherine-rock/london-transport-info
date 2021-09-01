import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { road: '' }
        this.handleRoadChange = this.handleRoadChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleRoadChange(event) {
        this.setState({ road: event.target.value })
    }

    handleSearch(event) {
        this.props.searchTFL(this.state.road);
        event.preventDefault();
    }

    render () {
        return (
            <div class="SearchBar">
                <div class="SearchBar-fields">
                    <input 
                        placeholder="Search by road name"
                        onChange={this.handleRoadChange} />
                </div>

                <div>
                    <p>To search for disruptions on one road, enter the road number in the search bar.</p>
                    <p>To search for multiple roads at once, use a comma between each road number.</p>
                    <p>For example: A406, A2</p>
                </div>

                <div class="SearchBar-submit">
                    <button onClick={this.handleSearch} >Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;