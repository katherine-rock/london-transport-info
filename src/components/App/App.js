import React from 'react'
// import Disruption from '../Disruption/Disruption';
import DisruptionList from '../DisruptionList/DisruptionList';
import SearchBar from '../SearchBar/SearchBar';
import TFL from '../../utils/TFL'
import Header from '../Header/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disruptions: []};
    this.searchTFL = this.searchTFL.bind(this);
  }

  searchTFL(road) {
    // console.log(`Searching Transport For London with road term ${road}`)
    TFL.searchTFL(road)
      .then((disruptions) => {
        this.setState({disruptions: disruptions})
      })
  }

  render () {
    return (
        <div class="App">
          <Header />
          <SearchBar searchTFL={this.searchTFL} />
          <DisruptionList disruptions={this.state.disruptions} />
        </div>
    )
  }
}

export default App
