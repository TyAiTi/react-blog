
import ReactPlayer from 'react-player'
import { Media, Player, controls } from 'react-media-player'
const {
    PlayPause,
    CurrentTime,
    Progress,
    SeekBar,
    Duration,
    MuteUnmute,
    Volume,
    Fullscreen,
  } = controls

const link = 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/21/253340/17c71b1212a7f69fa4dd7bb6e9702e9d.quicktime&size=large&filename=17c71b1212a7f69fa4dd7bb6e9702e9d.quicktime'
const link2= 'https://dev.digiin.vn/get-file?path=uploads/policy/2021/12/19/253275/0de900e92c15df877746ff09f81ed3c2.webm&size=large&filename=0de900e92c15df877746ff09f81ed3c2.webm.webm'
export default function Videos(){

    return(
        <div>
            <h5>Đây là component video</h5>
            <ReactPlayer 
                controls 
                url={link2} 
                width='480px'
                height='240px'
                
                onReady={ () => console.log('onReady callBack')}
                onStart={ () => console.log('onStart callBack')}
                onPause={ () => console.log('onPause callBack')}
                onEnded={ () => console.log('onEnded callBack')}
                onError={ () => console.log('onError callBack')}
            />
          <Media>
        <div className="media">
          <div className="media-player">
            <Player src={link2}  />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
            <Fullscreen/>
          </div>
        </div>
      </Media>
        </div>
    )
}