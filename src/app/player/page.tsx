import AudioPlayer from "@/components/AudioPlayer";
import React from "react";



function page() {
    return (
        <div className="grid min-h-screen place-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <AudioPlayer
            src={"/home/israel/Documents/music/test.mp3"}
            title={"sample"}
            artist={"Israel"}
          />
        </div>
      );
      
}

export default page;
