import WavyButton from "./wavybutton"
import style from './kasten.module.css'
import WindowFrame from "./windowFrame"
import Typewriter from "../utils/Typewriter"


const WavyConsole: React.FC = () => {

    return(
        <>
            <WindowFrame>
                <div
                    style={{
                        width: '600px',
                        height: '400px',
                        background: '#000000',
                        padding: '6px',
                        color: '#04e200',
                        fontFamily: 'console',
                        fontSize: '14px'
                    }}
                >
                    {/* #TODO: Make Typewriter compatible with paragraphs */}
                    <Typewriter
                        text="Hello, my name is alex hobden, im a software developer based in stuttgart...I would love to gain a carreer in the Game Design Industry" 
                        speed={50} 
                        linebreak={76} 
                        stepsize={1}/>
                </div>
            </WindowFrame>
        </>
                
    )
}

export default WavyConsole;