import { useState } from "react";

interface ItemProps {
    icon: string,
    text: string,
    children?: React.ReactNode; // Make the children prop optional
    addWindow: (child: React.ReactNode) => void;
}

const Item: React.FC<ItemProps> = ({children, icon, text, addWindow}) => {

    const [showContent, setShowContent] = useState<boolean>()

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }

    const addChildToWindow = () => {
        addWindow(children);
    }

    return(
        <div>
            <div onClick={addChildToWindow}><img src={`/images/${icon}.png`} alt="" /></div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Item;