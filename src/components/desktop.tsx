import { useState } from "react"
import Item from "./item"
import Kasten from "./kasten"
import WavyConsole from "./wavyConosle";
import WavyTaskBar from "./wavyTaskBar";
import ModelViewer from "./modelViewer";


const Desktop: React.FC = () => {

    const [windows, setWindows] = useState<React.ReactNode[]>([]);

    const addWindow = (newWindow: React.ReactNode) => {
        setWindows((prevWindows) => [...prevWindows, newWindow]);
    }


    return(
        <div className='App'>
            <WavyTaskBar></WavyTaskBar>
            <Item addWindow={addWindow} icon="foldernormal" text="clickme">
                <Kasten>
                    <div 
                        style={{
                            width: '1080px',
                            height: '600px',
                            background: '#ffffff',
                            padding: '8px'
                        }}>
                        <Item addWindow={addWindow} icon="console" text="hello.exe">
                            <WavyConsole></WavyConsole>
                        </Item>
                        <Item addWindow={addWindow} icon="foldernormal" text="car.mp4">
                            <Kasten>
                                <video width="320" height="480" autoPlay muted loop >
                                    <source src="/videos/wavy.mp4" type="video/mp4" />
                                </video>
                            </Kasten>
                        </Item>
                        <Item addWindow={addWindow} icon="network" text="skeleton.fbx">
                            <Kasten>
                                <ModelViewer/>
                            </Kasten>
                        </Item>
                    </div>
                </Kasten>
            </Item>

            {windows.length}

            {windows.map((window, index) => (
                <div key={index} style={{position: 'absolute'}}>
                    {window}
                </div>
            ))}
        </div>
    )
}

export default Desktop