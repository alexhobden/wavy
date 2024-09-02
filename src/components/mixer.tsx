import VideoPlayer from "./videoPlayer"
import style from "./wavy.module.css"
import WindowFrame from "./windowFrame"

const Mixer: React.FC = () => {
    return (
        <WindowFrame>
            <div className={style.mixer}>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                {/* <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer>
                <VideoPlayer size={250}></VideoPlayer> */}
            </div>
        </WindowFrame>
    )
}

export default Mixer
