import React from 'react'
import DisruptionList from '../DisruptionList/DisruptionList';
import SearchBar from '../SearchBar/SearchBar';
import TFL from '../../utils/TFL';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disruptions: []};
    this.searchTFL = this.searchTFL.bind(this);
  }

  // Calls the searchTFL API and then sets the state with all reported traffic disruptions 
  searchTFL(road) {
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
          <Footer />
        </div>
    )
  }
}

export default App
