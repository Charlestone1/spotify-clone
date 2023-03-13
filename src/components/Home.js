/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from 'react'
import { FiChevronRight, FiSearch, FiPlusSquare} from 'react-icons/fi'
import {HiArrowLeft, HiArrowRight} from "react-icons/hi"
import playlistData from "../assets/data/playlistData"
import PlaylistComponent from './PlaylistComponent'
import {MdFavoriteBorder, MdOutlineReplay} from "react-icons/md"
import {SlMusicToneAlt} from "react-icons/sl"
import {CgArrowsExpandRight} from "react-icons/cg"
import {TfiControlShuffle} from "react-icons/tfi"
import {AiOutlineFastForward, AiOutlineFastBackward} from "react-icons/ai"
import {BsPlayCircleFill, BsPauseCircleFill} from "react-icons/bs"
import {CiVolume, CiVolumeHigh} from "react-icons/ci"
import Pill from "./sub-components/Pill"
import FavArtist from './sub-components/FavArtist'
import drake from '../assets/image/drake.jpg'
import billie from '../assets/image/Billie_eilish.jpg'
import taylor from '../assets/image/taylor-swift.jpeg'
import kanye from '../assets/image/kanye_west.jpg'
// import nishino from '../assets/image/nishino_kana.jpg'
 
import axios from 'axios';




const Home = () => {
  const CLIENT_ID ="d2324170d23b411198e04c5225d15293";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);



  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);


  const logout = () => {
    window.localStorage.removeItem("token");
    setToken("");
  }
  

  const searchArtist = async e => {
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }

    });
    // console.log(data);
    setArtists(data.artists.items);
  }
  
  return (
    <>
      {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> 
        : <button onClick={logout}>Logout</button> 
      }
      {token ? 
        
    <div className='home_container'>
      <main className='main_home_container'>
        <div className='main_content search_container'>
          <div className='searcher_arrows'>
            <button><HiArrowLeft/></button>
            <button><HiArrowRight/></button>
          </div>
          <form onSubmit={searchArtist} className='search_input_div'>
            <button type={`submit`}><FiSearch/></button>
            <input onChange={e => setSearchKey(e.target.value)} className='my_input' type="search"  placeholder="search for an artist, song, and..."/>
          </form>
        </div>
        
        <div className='main_content trending_container'>
          <div className='trending_title_container'>
            <p className='fire'>What is hot <span>🔥</span></p>
            <div className='trending_title'>
              <h2>Trending</h2>
              <a href='#' className='more_link'>
                <p>More</p>
                <span><FiChevronRight /></span>
              </a>
            </div>
          </div>
          <div className='trending_banner'>
            <div className='trending_banner_title'>
              <p>Artist</p>
              <h2>on top <br/>of the world</h2>
            </div>
            <div className='music_action'>
              <div className='action_buttons_container'>
                <button className='play_btn active'>Play</button>
                <button className='follow_btn'>Follow</button>
              </div>
              <div className='listener_count'>
                <p>Monthly Listener</p>
                <span>82,092</span>
              </div>
            </div>
          </div>
        </div>
        <div className='main_content playlist_container'>
          <div className='playlist_container_title'>
            <h2>My Playlist</h2>
            <button className='show_all_btn'>
              Show All
            </button>
          </div>
          <div className='playlist_content'>
            <table className='table'>
              <tr className='table_row'>
                <th className='serial_no'>#</th>
                <th>TITLE</th>
                <th>ARTIST</th>
                <th>TIME</th>
                <th>ALBUM</th>
              </tr>
              {playlistData.map((song) => {
                return <PlaylistComponent key={song.id} song={song} />;
              })}
            </table>
          </div>
        </div>
        <div className='main_content playing_container'>
          <div className='play_icons'>
            <div className='first_icon_div'>
              <span className='favorite_song'><MdFavoriteBorder/></span>
              <span className='music_icon'><SlMusicToneAlt/></span>
              <span className='fullscreen'><CgArrowsExpandRight/></span>
            </div>
            <div className='play_controls'>
              <span className='replay'><MdOutlineReplay/></span>
              <span className='prev'><AiOutlineFastBackward/></span>
              <span className='play_pause'>
                {true? <BsPlayCircleFill/>: <BsPauseCircleFill/>}
              </span>
              <span className='next'><AiOutlineFastForward/></span>
              <span className='shuffle'><TfiControlShuffle/></span>
            </div>
            <div className='volume_container'>
              <span className='volume_low'><CiVolume/></span>
              <span className='volume_progress'>--------</span>
              <span className='volume_high'><CiVolumeHigh/></span>
            </div>
          </div>
          <div className='play_progress'>
            <span className='playtime_elapsed'>0:43</span>
            <span className='playtime_progress'>--------------------</span>
            <span className='playtime_remaining'>2:59</span>
          </div>
        </div>
      </main>
      <aside className='aside_container'>
        <div className='aside_content'>
          <div className='aside_title_container'>
            <h3>Shortcuts</h3>
          </div>
          <div className='pills_container'>
            <Pill text="Chill Hits" icon="❄"/>
            <Pill text="Hop" icon="⭐"/>
            <Pill text="Accoustic" icon="🎸"/>
            <Pill text="Indian Pop" icon="🎵"/>
            <Pill text="Pian Blues" icon="🎹"/>
            <Pill text="Jazz" icon="🎺"/>
          </div>
          <div className='favorite_artist'>
            <h3>Fav Artist</h3>
            <div>
              <FavArtist name="Taylor Swift" imgSrc={taylor} numsongs='196' />
              <FavArtist name="Kanye West" imgSrc={kanye} numsongs="124" />
              <FavArtist name="Drake" imgSrc={drake} numsongs="50" />
              <FavArtist name="Billie Eilish" imgSrc={billie} numsongs="15" />
            </div>
          </div>
          <div className='now_playing_card'>
              <div className='now_playing_card_img_container'>
                {/* <img src={nishino} alt="Nishino Kana" /> */}
              </div>
              <div className='now_playing_card_details'>
                <div className='artist_name_title'>
                  <p className='Now_playing_song_title'>Torisetsu</p>
                  <p className='Now_playing_artist'>Kana Nishino</p>
                </div>
                <span>
                  <FiPlusSquare/>
                </span>
              </div>
          </div>
        </div>
      </aside>
    </div>
        : <h2>Please Login</h2>
      }
    </>
  )
}


export default Home