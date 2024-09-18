import Typewriter from "../../utils/Typewriter"
import Item from "../item"

const About: React.FC = () => {
    return (
        <div className="w-full h-full">
            <div className=" h-[60%] w-full font-wavy flex">
                <img
                    className="w-38 h-36"
                    src={`/images/rhenologo.png`}
                    alt=""
                />
                <div className="p-2 pl-4 text-center">
                    <Typewriter
                        text="Wir sind ein 1903 gegründeter, katholischer Studentenverein im
                            Herzen der schwäbischen Landeshauptstadt. Unsere Mitglieder sind
                            Studenten und fertig ausgebildete Akademiker. Wichtige Elemente
                            unserer Gemeinschaft sind unsere Prinzipien Religion,
                            Wissenschaft und Freundschaft."
                        speed={40}
                        stepsize={1}
                        linebreak={999}
                    ></Typewriter>
                </div>
            </div>
            <div className=" h-[40%] w-full font-wavy flex">
                <Item
                    icon="folderrhn"
                    text="Our Website.html"
                    addWindow={() => {}}
                ></Item>
            </div>
        </div>
    )
}

export default About
