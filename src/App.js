// import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
// import axios from 'axios';

function App() {
  
  
  // const renderArtist = () => {
  //   return artists.map(artist => (
  //     <div key={artist.id}>
  //       <h3>{artist.name}</h3>
  //       <img src={artist.images[0].url} />
  //       <p>{artist.followers.total}</p>
  //       <p>{artist.popularity}</p>
  //       <p>{artist.external_urls.spotify}</p>
  //       <p>{artist.genres.join(", ")}</p>
  //       <p>{artist.type}</p>
  //       <p>{artist.uri}</p>
  //     </div>
  //   ))
  // }

  
  return (
   <div>
    
    <h2>Spotify App</h2>
      {/* {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> 
        : <button onClick={logout}>Logout</button> 
      }
      {token ? 
        <form onSubmit={searchArtist}>
          <input type="text" onChange={e => setSearchKey(e.target.value)} />
          <button type={`submit`}>Search</button>
        </form> : <h2>Please Login</h2>
      } */}
      {/* {renderArtist()} */}
      <Main />
   </div>
  );
}

export default App;
