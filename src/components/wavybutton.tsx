import { Children } from 'react';
import style from './button.module.css'

interface WavyButtonProps {
    children?: React.ReactNode; // Make the children prop optional
}

const WavyButton: React.FC<WavyButtonProps> = ({children}) => {

    return(
        <div className={style.normal}>
            {children}
        </div>
    )
}

export default WavyButton;