import style from "../components/wavy.module.css"

interface WindowProps {
    children?: React.ReactNode
}

const ExplorEntry: React.FC<WindowProps> = ({ children }) => {
    return (
        <div className={style.entry}>
            <img
                style={{
                    height: "16px",
                    marginRight: "4px",
                }}
                src={`/images/foldernormal.png`}
                alt=""
            />
            {children}
        </div>
    )
}

export default ExplorEntry
