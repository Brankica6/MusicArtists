import React from 'react';
import '../css/TopAlbums.css';


const Artist = (props) => {
  const tracks1 = (props.tracks.length === 0) ? '' :
  <div className='album-hover'>
    {
       props.tracks.track.map((el,i) => {
        return <div className='inside' key={i} onClick= {() => {window.open(el.url, "_blank");}}>
                  <p><span>{i+1}. </span> {el.name}</p>
               </div>
            })
    }
  </div>
  return (
      <div className="album-card"
          onMouseEnter={(e) =>
             {
              props.getAlbumInfo(props.name, e.currentTarget.children[1].children[1].textContent)
            }}
          onMouseLeave={()=>{props.ClearTracks()}}>
        <img src={props.img} alt={props.img}/>
        <div className='album-info'>
          <p>{props.name}</p>
          <p>{props.albumName}</p>
        </div>
          {tracks1}
      </div>
    )
}

export default Artist;
