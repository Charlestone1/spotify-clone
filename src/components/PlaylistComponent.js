import React from 'react'
import {CiVolumeHigh} from 'react-icons/ci'

const PlaylistComponent = (props) => {
    const { sn, title, artist, time, album } = props.song;
  return (
    <>
      <tr className='table_row'>
          <td className='table_data serial_no'>{true? sn : <CiVolumeHigh/>}</td>
          <td className='table_data'>{title}</td>
          <td className='table_data'>{artist}</td>
          <td className='table_data'>{time}</td>
          <td className='table_data'>{album}</td>
      </tr>
    </>
  )
}

export default PlaylistComponent