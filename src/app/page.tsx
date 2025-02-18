"use server";
import AudioPlayer from "@/components/AudioPlayer";
// import TrackList from "@/components/TrackList";
import { getQueryClient } from "@/lib/getQueryClient";
// import { getAllTracks } from "@/server-actions/tracks";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const client = getQueryClient();
  // const songs = await getAllTracks()
  return (
    <HydrationBoundary state={dehydrate(client)}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <AudioPlayer src={"http://goldfirestudios.com/proj/howlerjs/sound.ogg"} title={"sample"} artist={"Israel"} />
      </div>
    </HydrationBoundary>
  );
}
