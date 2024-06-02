import { PlayVIdeo, StopVideo } from "../utils/videoUtils"; 

export class VideoClass{
    constructor ({
      name,
      videoId
    }) {
      this.name = name,
      this.videoId = videoId
    }

    reproducion () {
      PlayVIdeo(this.videoId);
    }

    pause () {
      StopVideo(this.videoId);
    }
  }