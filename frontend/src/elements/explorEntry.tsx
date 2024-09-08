import style from "../components/wavy.module.css"

interface EntryProps {
    children?: React.ReactNode
    switchTab: (child: React.ReactNode) => void
    name: string;
}

const ExplorEntry: React.FC<EntryProps> = ({ name, switchTab, children }) => {


    const switchExplorerTab = () => {
        switchTab(children)
    }

    return (
        <button 
        onClick={switchExplorerTab}
        className="flex align-bottom h-[16px] w-full font-wavy text-[14px] mb-[6px] hover:cursor-default focus:bg-[#97be0d]">
            <img
                style={{
                    height: "16px",
                    marginRight: "4px",
                }}
                src={`/images/folderrhn.png`}
                alt=""
            />
            <div>{name}</div>
        </button>
    )
}

export default ExplorEntry
