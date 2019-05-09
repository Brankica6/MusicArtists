import React from 'react';
import '../css/Artist.css'


const Artist = (props) => {
      return (
          <div className="artist-card" onClick = {props.OnClickChange}>
              <img src={props.img} alt={props.img}/>
              <div className='name'>
                <p>{props.name}</p>
              </div>
          </div>
      );
}

export default Artist;
