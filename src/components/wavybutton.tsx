import { Children } from 'react';
import style from './button.module.css'

interface WavyButtonProps {
    children?: React.ReactNode; // Make the children prop optional
    use?: () => void;
    funktion: string;
}

const WavyButton: React.FC<WavyButtonProps> = ({children, funktion, use}) => {
    
    const name = `/svgs/${funktion}.svg`;

    return(
        <button 
            onClick={use}
            className={style.normal}
            style={{
                backgroundImage: `url(${name})`,
                backgroundRepeat: `no-repeat`, /* Prevent the SVG from repeating */
                backgroundPosition: `center`
            }}
        >
            {children}
        </button>
    )
}

export default WavyButton;