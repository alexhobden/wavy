import Typewriter from "../utils/Typewriter"
import WavyConsole from "./wavyConosle"
import WindowFrame from "./windowFrame"

interface KastenProps {
    title: string
    children?: React.ReactNode // Make the children prop optional
}

const Kasten: React.FC<KastenProps> = ({ title, children }) => {
    return (
        <>
            <WindowFrame title={title}>
                <div className="flex w-full mb-[4px]">
                    <div className="wavy-hollow p-[4px] whitespace-normal break-words flex-1 font-wavy">
                        <div className="w-full h-full bg-black p-[6px] text-[#04e200] font-console text-[14px]">
                            {/* #TODO: Make Typewriter compatible with paragraphs */}
                            <Typewriter
                                text="Religio.  Scientia.  Amicitia..."
                                speed={200}
                                linebreak={76}
                                stepsize={1}
                            />
                        </div>
                    </div>
                    <div className="wavy-hollow bg-white ml-[4px] p-[8px] font-wavy">
                        Search Items...
                    </div>
                </div>
                <div>{children}</div>
            </WindowFrame>
        </>
    )
}

export default Kasten
