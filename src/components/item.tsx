import { useState } from "react";

interface ItemProps {
    icon: string,
    children?: React.ReactNode; // Make the children prop optional
}

const Item: React.FC<ItemProps> = ({children, icon}) => {

    const [showContent, setShowContent] = useState<boolean>()

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }

    return(
        <div>
            <div onClick={toggleShowContent}><img src={`/images/${icon}.png`} alt="" /></div>
            {showContent && children}
        </div>
    )
}

export default Item;