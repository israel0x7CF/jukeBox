"use client"
import { AudioLibContextType } from '@/types/types'
import {createContext,useContext,useState,useEffect, ReactNode } from 'react'
import ReactHowler from 'react-howler'

const AudioProvider  = createContext<AudioLibContextType | null>(null)
export function AudioLibProvider({ children }: {children:ReactNode}){
    const[audioLib,setAudioLib] = useState<ReactHowler | null>(null)
    useEffect(() => {
        // Initialize audio library when the page loads
        const howlerInstance = new ReactHowler({
          src: '',
          playing: false,
        });
        setAudioLib(howlerInstance);
        
        return () => {
          // Cleanup when unmounting
          setAudioLib(null);
        };
      }, []);
    return(
        <AudioProvider.Provider value={{audioLib,setAudioLib}}>
            {children}
        </AudioProvider.Provider>
    )

}
export const useAudioLib = () => {
    const context = useContext(AudioProvider);
    if (!context) {
      throw new Error('useAudioLib must be used within an AudioLibProvider');
    }
    return context;
  };