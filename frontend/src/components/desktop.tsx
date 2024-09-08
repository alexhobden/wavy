import { useState } from "react"
import Item from "./item"
import Kasten from "./wavyContainer"
import WavyConsole from "./wavyConosle"
import WavyTaskBar from "./wavyTaskBar"
import ModelViewer from "./modelViewer"
import WavyDirectory from "./wavyDirectory"
import VideoPlayer from "./videoPlayer"
import WindowFrame from "./windowFrame"
import Mixer from "./mixer"
import ExplorEntry from "../elements/explorEntry"

const Desktop: React.FC = () => {
    const [windows, setWindows] = useState<React.ReactNode[]>([])

    const addWindow = (newWindow: React.ReactNode) => {
        setWindows((prevWindows) => [...prevWindows, newWindow])
    }

    return (
        <div className="App">
            <WavyTaskBar></WavyTaskBar>
            <Item addWindow={addWindow} icon="folderrhn" text="clickme">
                <Kasten title="KAV Rheno-Nicaria e.V.">
                    <WavyDirectory>
                        {/* <Item
                            addWindow={addWindow}
                            icon="console"
                            text="hello.exe"
                        >
                            <WavyConsole></WavyConsole>
                        </Item> */}
                    </WavyDirectory>
                </Kasten>
            </Item>

            <Item addWindow={addWindow} icon="video" text="mixer.wavy">
                <Mixer></Mixer>
            </Item>

            {windows.map((window, index) => (
                <div key={index} style={{ position: "absolute" }}>
                    {window}
                </div>
            ))}
        </div>
    )
}

export default Desktop
