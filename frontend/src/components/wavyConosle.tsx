import WindowFrame from "./windowFrame"
import Typewriter from "../utils/Typewriter"

const WavyConsole: React.FC = () => {
    return (
        <>
            <WindowFrame title="console">
                <div className="w-[600px] h-[400px] bg-black p-[6px] text-[#04e200] font-console text-[14px]">
                    {/* #TODO: Make Typewriter compatible with paragraphs */}
                    <Typewriter
                        text="Mit der Ankunft frühlingshafter Tage leitet sich auch das 242. Coleursemester der Rheno-Nicaria ein. Wie gewohnt halten wir ein interessantes Programm bereit, in dem sich unsere Prinzipien -Religion, Wissenschaft, und Freundschaft - wiederfinden. Wir blicken einem Semester voller erinnerungswürdiger Momente entgegen und heißen euch herzlich willkommen, gemeinsam mit uns auf dem Rheno-Nicaren-Haus diese Zeit zu gestalten und zu erleben."
                        speed={50}
                        linebreak={76}
                        stepsize={1}
                    />
                </div>
            </WindowFrame>
        </>
    )
}

export default WavyConsole
