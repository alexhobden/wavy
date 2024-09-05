import ExplorEntry from "../elements/explorEntry"
import VideoPlayer from "./videoPlayer"
import style from "./wavy.module.css"

interface WavyDirectoryProps {
    children?: React.ReactNode
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({ children }) => {
    return (
        <>
            <div style={{ display: "flex" }} className={style.path}>
                <img
                    style={{ marginRight: "12px" }}
                    src={`/images/foldernormal.png`}
                    alt=""
                />{" "}
                W:/user/alex/desktop/wavydrive
            </div>
            <div style={{ display: "flex" }}>
                <div className={style.explorer}>
                    <ExplorEntry>Home</ExplorEntry>
                    <ExplorEntry>Blender</ExplorEntry>
                    <ExplorEntry>TV Room</ExplorEntry>
                    <ExplorEntry>Art</ExplorEntry>
                    <ExplorEntry>Animation</ExplorEntry>
                    {/* <VideoPlayer size={228}></VideoPlayer> */}
                </div>
                <div className={style.directory}>{children}</div>
            </div>
        </>
    )
}

export default WavyDirectory
