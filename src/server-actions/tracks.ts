"use server";
import axios from "axios";

export async function getAllTracks() {
  try {
    const adminUrl = `${process.env.PAYLOADBASEURL}JukeBox`;
   // const apiKey = process.env.APIKEY
    const response = await axios.get(adminUrl,
    //{
    //     headers:{
    //         Authorization:`JukeBox API-Key ${apiKey}`
    //     }
    // }
     );
     console.log()
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Now TS knows error is an Error object
    } else {
      console.error("Unknown error", error);
    }
  }
}
