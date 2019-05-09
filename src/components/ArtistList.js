import React from 'react';
import Artist from './Artist';
import TopAlbums from './TopAlbums';
import '../css/ArtistList.css';
import arrows from '../images/Left_arrow_circle.png';


const ArtistList = (props) => {
  const {artists,OnClickChange,albums,ClearAlbums,getAlbumInfo,tracks,ClearTracks,noResults} = props;
  if(albums.length === 0) {
    return (
      <section className="artists-list">
        {
          (noResults) ? <div className='noresults'><span>No results</span></div>:
            artists.map((artist,i) => {
              return (
                <Artist
                   key = {i}
                    name={artist.name}
                    img={artist.image[2]['#text']}
                    OnClickChange={OnClickChange}
                  />
              )
            })
          }
      </section>
   )
  } else {
      const artistName = albums['@attr'].artist;
      return(
        <div className="wrapper">
          <div className='back'>
            <img src={arrows} alt='back' onClick = {ClearAlbums}/>
          </div>
          <div className="album-list">
            {
                albums['album'].map((artist,i) => {
                  return (
                    <TopAlbums
                        key = {i}
                        albumName={albums['album'][i].name}
                        name={artistName}
                        img={albums['album'][i].image[3]['#text']}
                        url={albums['album'][i].url}
                        getAlbumInfo={getAlbumInfo}
                        tracks={tracks}
                        ClearTracks={ClearTracks}
                      />
                  )
                })
              }
            </div>
        </div>
      )
    }
}

export default ArtistList;
