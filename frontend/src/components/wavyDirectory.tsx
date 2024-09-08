import ExplorEntry from "../elements/explorEntry"

interface WavyDirectoryProps {
    children?: React.ReactNode
}

const WavyDirectory: React.FC<WavyDirectoryProps> = ({ children }) => {
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
                    <ExplorEntry>Home</ExplorEntry>
                    <ExplorEntry>Über Uns</ExplorEntry>
                    <ExplorEntry>Semesterprogramm</ExplorEntry>
                    <ExplorEntry>Chargia</ExplorEntry>
                    <ExplorEntry>Konten</ExplorEntry>
                    {/* <VideoPlayer size={228}></VideoPlayer> */}
                </div>
                <div className="wavy-hollow flex pl-[8px] pr-[12px] pb-[12px] pt-[16px] bg-white w-[480px] h-96">
                    {children}
                </div>
            </div>
        </>
    )
}

export default WavyDirectory
