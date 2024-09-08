import { useState } from "react"
import ExplorEntry from "../elements/explorEntry"
import About from "./pages/about"
import Program from "./pages/program"
import Home from "./pages/home"

interface WavyDirectoryProps {
    children?: React.ReactNode
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({children }) => {
    const [explorerTab, setExplorerTab] = useState<React.ReactNode>()

    const switchTab = (newTab: React.ReactNode) => {
        setExplorerTab(newTab)
    }
    return (
        <>
            <div
                style={{ display: "flex" }}
                className="w-full h-[36px] font-wavy p-[8px] ml-[4px] bg-white wavy-hollow"
            >
                <img
                    className="ml-[12px] mr-[8px]"
                    src={`/images/folderrhn.png`}
                    alt=""
                />{" "}
                W:/Stuttgart/Etzelstraße/KAV Rheno-Nicaria/Home
            </div>
            <div className="flex">
                <div className="w-[200px] p-[20px] bg-white wavy-hollow">
                    <ExplorEntry name="Home" switchTab={switchTab}>
                        <Home></Home>
                    </ExplorEntry>
                    <ExplorEntry name="Über Uns" switchTab={switchTab}>
                        <About></About>
                    </ExplorEntry>
                    <ExplorEntry name="Semesterprogramm" switchTab={switchTab}>
                        <Program></Program>
                    </ExplorEntry>
                    <ExplorEntry name="Chargia" switchTab={switchTab}></ExplorEntry>
                    <ExplorEntry name="Konten" switchTab={switchTab}></ExplorEntry>
                    {/* <VideoPlayer size={228}></VideoPlayer> */}
                </div>
                <div className="wavy-hollow flex pl-[8px] pr-[12px] pb-[12px] pt-[16px] bg-white w-[480px] h-96">
                    {explorerTab}
                </div>
            </div>
        </>
    )
}

export default WavyDirectory
