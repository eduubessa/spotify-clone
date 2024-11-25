import React from 'react'
import Navbar from '../Navbar'
import { albumsData, songsData } from '../../assets'
import AlbumItem from '../AlbumItem'
import SongItem from '../SongItem'

const DisplayHome = () => {
  return (
    <>
      <div className='text-white'>
        <Navbar />
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto'>
            { albumsData && albumsData.length > 0 ? (
              albumsData.map((album, index) => (
                <AlbumItem key={index} image={album.image} name={album.name} desc={album.desc} id={album.id} />
              ))) : (
                <p>Sem albums disponiveis neste momento!</p>
              )
            }
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          { songsData && songsData.length > 0 ? (
            songsData.map((song, index) => (
              <SongItem key={index} image={song.image} name={song.name} desc={song.desc} id={song.id} />
            ))) : (
              <p>Sem músicas disponiveis neste momento!</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default DisplayHome