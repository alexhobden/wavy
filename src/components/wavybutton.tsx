import { Children } from "react"
import style from "./wavy.module.css"

interface WavyButtonProps {
    children?: React.ReactNode // Make the children prop optional
    use?: () => void
    funktion: string
}

const WavyButton: React.FC<WavyButtonProps> = ({ children, funktion, use }) => {
    const name = `/svgs/${funktion}.svg`

    return (
        <button
            onClick={use}
            className="w-[25px] h-[25px] ml-[1px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${name})`,
                backgroundRepeat: `no-repeat` /* Prevent the SVG from repeating */,
                backgroundPosition: `center`,
                backgroundColor: "#ffe8a9",
                boxShadow: `
                    inset -2px -2px 0 0 #000000,
                    inset 2px 2px 0 0 #545454,
                    inset -3px -3px 0 0 #443d2d,
                    inset 3px 3px 0 0 #fffaee,
                    inset -4px -4px 0 0 #c4b795,
                    inset 4px 4px 0 0 #fff2d0
            
                `.trim(),

                border: "2px",
            }}
        >
            {children}
        </button>
    )
}

export default WavyButton
