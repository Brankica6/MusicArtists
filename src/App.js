import React, { Component } from 'react';
import Search from './components/Search';
import ArtistList from './components/ArtistList';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists:[],
      albums: [],
      tracks:[],
      searchField: '',
      noResults: false
    }
  }

  searchArtist = (name) => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=a50a3cb88b192fbc33468ca2bd14952a&format=json`)
      .then(response => {
        return response.json();
      }).then(artist => {
        if(artist.results.artistmatches.artist.length === 0) {
          this.setState({
            artists:artist.results.artistmatches.artist,
            noResults: true
          });
        } else {
          this.setState({
            artists:artist.results.artistmatches.artist,
            noResults:false
        });
        console.log(artist.results.artistmatches.artist);
      }
      }).catch(error => console.error('Error:', error));
   }

  getTopAblums = (name) => {
   fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&limit=10&api_key=a50a3cb88b192fbc33468ca2bd14952a&format=json`)
     .then(response => {
       return response.json();
     }).then(artist => {
       this.setState({albums:artist.topalbums});
     }).catch(error => console.error('Error:', error));
  }

  getAlbumInfo = (artist,album) => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artist}&album=${album}&api_key=a50a3cb88b192fbc33468ca2bd14952a&format=json`)
      .then(response => {
        return response.json();
      }).then(artist => {
        this.setState({tracks:artist.album.tracks})
      }).catch(error => console.error('Error:', error));

  }

   OnClickChange = (event) => {
     const artistName = event.currentTarget.children[1].children[0].textContent;
     this.getTopAblums(artistName);
   }

   ClearAlbums = () => {
     this.setState({albums:''});
   }

   ClearTracks = () => {
     this.setState({tracks:''});
   }

   OnSearchChange = (event) => {
     this.setState({searchField :event.target.value});
     if(event.target.value !== '') this.searchArtist(event.target.value);
  }

  render() {
    return(
      <div>
        <Search searchChange = {this.OnSearchChange}/>
        <ArtistList
            artists = {this.state.artists}
            noResults = {this.state.noResults}
            OnClickChange={this.OnClickChange}
            albums = {this.state.albums}
            ClearAlbums = {this.ClearAlbums}
            getAlbumInfo = {this.getAlbumInfo}
            tracks = {this.state.tracks}
            ClearTracks = {this.ClearTracks}
          />
      </div>
    )
  }
}
export default App;
