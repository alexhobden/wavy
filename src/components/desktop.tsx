import Item from "./item"
import Kasten from "./kasten"


const Desktop: React.FC = () => {


    return(
        <div className='App'>
            <Item icon="foldernormal">
                <Kasten>
                    <div 
                        style={{
                            width: '1080px',
                            height: '600px',
                            background: '#ffffff',
                        }}>
                        hello
                        {/* #FIXME: Fix nesting problem */}
                        <Item icon="foldernormal">
                            <Kasten>
                                <video width="320" height="480" autoPlay muted loop >
                                    <source src="/videos/wavy.mp4" type="video/mp4" />
                                </video>
                            </Kasten>
                        </Item>
                    </div>
                </Kasten>
            </Item>
            {/* <Kasten>
                <video width="320" height="480" autoPlay muted loop >
                    <source src="/videos/wavy.mp4" type="video/mp4" />
                </video>
            </Kasten>
            <Kasten>
                <div 
                    style={{
                        width: '1080px',
                        height: '600px',
                        background: '#ffffff',
                    }}>
                    hello
                </div>
            </Kasten> */}
        </div>
    )
}

export default Desktop