﻿import ytdl from "ytdl-core"
import fs from "fs"
  
export const download = (videoId) => new Promise((resolve, reject) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o donwload do video:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new error("A duração desse vídeo é maior do que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("Donwload do vídeo finalizado.")
      resolve()
    })
    .on("error", (error) => {
      console.log(
        "Não foi possivel fazer o Download do vídeo. Detalhes do error",
        error
      )
      reject(error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
})