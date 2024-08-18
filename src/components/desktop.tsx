import { useState } from "react"
import Item from "./item"
import Kasten from "./kasten"


const Desktop: React.FC = () => {

    const [windows, setWindows] = useState<React.ReactNode[]>([]);

    const addWindow = (newWindow: React.ReactNode) => {
        setWindows((prevWindows) => [...prevWindows, newWindow]);
    }


    return(
        <div className='App'>
            <Item addWindow={addWindow} icon="foldernormal">
                <Kasten>
                    <div 
                        style={{
                            width: '1080px',
                            height: '600px',
                            background: '#ffffff',
                        }}>
                        hello
                        <Item addWindow={addWindow} icon="foldernormal">
                            <Kasten>
                                <video width="320" height="480" autoPlay muted loop >
                                    <source src="/videos/wavy.mp4" type="video/mp4" />
                                </video>
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