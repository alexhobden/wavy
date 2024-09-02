import { Center } from "@react-three/drei"
import { useState } from "react"

interface ItemProps {
    icon: string
    text: string
    children?: React.ReactNode // Make the children prop optional
    addWindow: (child: React.ReactNode) => void
}

const Item: React.FC<ItemProps> = ({ children, icon, text, addWindow }) => {
    const [showContent, setShowContent] = useState<boolean>()

    const toggleShowContent = () => {
        setShowContent(!showContent)
    }

    const addChildToWindow = () => {
        addWindow(children)
    }

    return (
        <div
            style={{
                width: "64px",
            }}
        >
            <div
                style={{ display: "flex", justifyContent: "center" }}
                onClick={addChildToWindow}
            >
                <img
                    style={{ transform: "scale(1.1)" }}
                    src={`/images/${icon}.png`}
                    alt=""
                />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "wavy",
                    fontSize: "14px",
                    textAlign: "center",
                }}
            >
                {text}
            </div>
        </div>
    )
}

export default Item
