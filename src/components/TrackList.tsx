"use client"

import { getAllTracks } from '@/server-actions/tracks';
import React, { useEffect, useState } from 'react'

//type Props = {}

function TrackList() {
    const [songs,setSongs] = useState<unknown>();
    useEffect(()=>{
        const fetchData = async ()=>{
        const music = await getAllTracks()
        if(music){

            setSongs(music)
        }
        }
        fetchData()
    },[])
  return (
    <div>{JSON.stringify(songs)}</div>
  )
}

export default TrackList