import { useState } from 'react';
import style from './kasten.module.css'
import WavyButton from './wavybutton';

interface KastenProps {
    children?: React.ReactNode; // Make the children prop optional
}

const Kasten: React.FC<KastenProps> = ({children}) => {

    const [position, setPosition] = useState({ top: 0, left : 0})

    const generateRandomPosition = () => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 600))
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - 400));
        setPosition({ top: randomTop, left: randomLeft });
    }


    return(
        <div 
            className={style.normal}
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`
            }}
        >
            <div className={style.header}>
                <div className={style.title}>WAVY BOX</div>
                #FIXME: outsource svgs
                <WavyButton>
                    <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H6V2H0V0Z" fill="black"/>
                    </svg>
                </WavyButton>
                <WavyButton>
                    <svg width="16" height="16" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0H0V9H9V0ZM8 2H1V8H8V2Z" fill="black"/>
                    </svg>
                </WavyButton>
                <WavyButton>
                    <svg width="16" height="16" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z" fill="black"/>
                    </svg>
                </WavyButton>
            </div>
            <button onClick={generateRandomPosition}>
        Move Div to Random Position
      </button>
            <div className={style.container}>
                <div className={style.toolbar}>
                    <div className={style.innen}>Hello</div>
                    <div className={style.searchbar}>Search Items...</div>
                </div>
                <div className={style.inhalt}>
                    
                    <div className={style.content}></div>
                    
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Kasten;