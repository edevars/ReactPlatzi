import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout.js';
import Video from '../components/video';
import Title from '../components/title'
class VideoPlayer extends Component {
    render(){
    return(
        <VideoPlayerLayout>
           <Title
                title='Es un video chido'
           />
           <Video
                autoplay={true}
                src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
           />
        </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;