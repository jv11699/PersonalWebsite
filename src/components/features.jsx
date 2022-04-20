import { useState } from "react"
import ReactPlayer from "react-player"
import "./Popup.css"
import $ from "jquery";
import Popup from "reactjs-popup"
export const Features = (props) => {
  const [changeOpen, setOpenChange] = useState(false);
  const [video_url, setVideo_url] = useState("");
  const [video_title, setVideo_title] = useState("");
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Data Competition</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-xs-12 col-md-6'>
                {' '}
                <div class="d-flex justify-content-center" data-target="#exampleModal" data-toggle="modal" onClick={() => {
                  if (d.isVideo) {
                    setVideo_url(d.videoPath);
                    setVideo_title(d.title);
                  }
                }}>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'Loading...'}
          <div class="player-wrapper">
            <div class="modal fade" id={"exampleModal"} tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">{video_title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <ReactPlayer
                      url={video_url}
                      controls={true}
                      width="100%"
                      height="50%"
                      className='react-player fixed-bottom' />

                  </div>
                  <div class="modal-footer">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      Close
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
