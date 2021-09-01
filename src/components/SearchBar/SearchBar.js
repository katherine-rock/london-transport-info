import React from 'react';

class SearchBar extends React.Component {
    render () {
        return (
            <div class="SearchBar">
                <div class="SearchBar-fields">
                    <input placeholder="Search by road name" />
                </div>

                <div>
                    <p>To search for disruptions on one road, enter the road number in the search bar.</p>
                    <p>To search for multiple roads at once, use a comma between each road number.</p>
                    <p>For example: A406, A2</p>
                </div>

                <div class="SearchBar-submit">
                    <button>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;