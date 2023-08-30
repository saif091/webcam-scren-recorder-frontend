import React,{useEffect,useRef} from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import Footer from "../components/Footer";
import Header from "../components/Header";
export const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
    if (!stream) {
      return null;
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />;
  };
const test = ()=>{

}
export const Webcam = () => (
    
  <div>
    <Header/>
    <h1>WebCam</h1>

    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl,previewStream }) => (
        <div>
          <p>{status}</p>
         <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Preview </h5>
        <p className="card-text">Press the start button </p>
        <VideoPreview stream={previewStream} />      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Recorded Video</h5>
        <p className="card-text">click 3 dots to download video</p>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
    </div>
  </div>
</div>                    

<button type="button" onClick={startRecording} class="btn btn-success btn-lg">Start Recording</button>
<button type="button" onClick={stopRecording}class="btn btn-danger btn-lg">Stop Recording</button>

        </div>
      )}
    />
    <Footer/>
  </div>
);
