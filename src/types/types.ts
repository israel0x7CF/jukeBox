import ReactHowler from "react-howler";

export interface JukeBox {
    id: string;
    title: string;
    version: string;
    artists?: (string | Artist)[] | null;
    releaseDate: string;
    trackNumber?: number | null;
    spotifyURL?: string | null;
    appleMusicURL?: string | null;
    itunesURL?: string | null;
    bandcampURL?: string | null;
    youtubeURL?: string | null;
    amazonURL?: string | null;
    bpm?: number | null;
    key?: string | null;
    moods?:
      | {
          mood?: string | null;
          id?: string | null;
        }[]
      | null;
    instrumentalOrVocal: 'instrumental' | 'vocal';
    lyrics?: (string | null) | SongLyric;
    genre?: (string | null) | Genre;
    audioFiles?: {
      mp3_v0?: (string | null) | BunnyStorageMeta;
      mp3_320?: (string | null) | BunnyStorageMeta;
      aac?: (string | null) | BunnyStorageMeta;
      flac?: (string | null) | BunnyStorageMeta;
      alac?: (string | null) | BunnyStorageMeta;
      ogg_vorbis?: (string | null) | BunnyStorageMeta;
    };
    duration: number;
    updatedAt: string;
    createdAt: string;
  }

  export interface Artist {
    id: string;
    artistName?: string | null;
    linkedMusic?: {
      docs?: (string | JukeBox)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "songLyrics".
   */
  export interface SongLyric {
    id: string;
    text?: string | null;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    thumbnailURL?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
  }
  export interface Genre {
    id: string;
    name: string;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "bunnyStorageMeta".
   */
  export interface BunnyStorageMeta {
    id: string;
    title: string;
    url: string;
    loudness: string;
    duration: string;
    sampleRate: string;
    bitDepth: string;
    bitrate: string;
    codec: string;
    updatedAt: string;
    createdAt: string;
  }
  
export interface AudioLibContextType {
  audioLib: ReactHowler | null;
  setAudioLib: (audio: ReactHowler | null) => void;
}