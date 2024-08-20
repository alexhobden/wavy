import style from './wavy.module.css'

interface WavyDirectoryProps{
    children?: React.ReactNode;
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({children}) => {

    return(
        <div className={style.directory}>
            {children}
        </div>
    )
}

export default WavyDirectory;