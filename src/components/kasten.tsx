import { useEffect, useState } from 'react';
import style from './wavy.module.css'
import WavyButton from './wavybutton';
import WindowFrame from './windowFrame';

interface KastenProps {
    children?: React.ReactNode; // Make the children prop optional
}

const Kasten: React.FC<KastenProps> = ({children}) => {

    return(
        <>
            <WindowFrame>
                <div className={style.toolbar}>
                    <div className={style.innen}>Hello</div>
                    <div className={style.searchbar}>Search Items...</div>
                </div>
                <div className={style.display}>
                    {children}
                </div>
            </WindowFrame>
        </>
    )
}

export default Kasten;