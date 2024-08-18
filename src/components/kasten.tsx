import { useEffect, useState } from 'react';
import style from './kasten.module.css'
import WavyButton from './wavybutton';

interface KastenProps {
    children?: React.ReactNode; // Make the children prop optional
}

const Kasten: React.FC<KastenProps> = ({children}) => {

    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState<{top:number, left: number}>({ top: 0, left : 0})
    const [zIndex, setZIndex] = useState<number>();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleRemove = () => {
        setIsVisible(false);
      };

    const generateRandomPosition = () => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 600))
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - 400));
        setPosition({ top: randomTop, left: randomLeft });
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        // Calculate the offset between the mouse position and the div's top-left corner
        setOffset({
          y: e.clientY - position.top,
          x: e.clientX - position.left,
        });

        const elements = document.querySelectorAll('*'); // Select all elements
        let highestZIndex = 0;

        elements.forEach((el) => {
            const zIndex = Number(window.getComputedStyle(el).zIndex);
            if (!isNaN(zIndex)) {
                highestZIndex = Math.max(highestZIndex, zIndex);
            }
        });

        setZIndex(highestZIndex + 1);
      };
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
        if (isDragging) {
          // Update the position of the div based on the mouse movement
          setPosition({
            top: e.clientY - offset.y,
            left: e.clientX - offset.x,
          });
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };

      useEffect(() => {
        if (isDragging) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        } else {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
        // Cleanup event listeners on component unmount
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }, [isDragging]);

      useEffect(()=>{
        generateRandomPosition();
      }, []);


    return(
        <>
            {isVisible && (
                <div 
                    className={style.normal}
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        zIndex: `${zIndex}`,
                    }}
                >
                    <div 
                        className={style.header}>
                        <div 
                            className={style.title}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}   
                            style={{
                                cursor: isDragging? 'grabbing' : 'grab'
                            }}
                        >WAVY BOX</div>
                        <WavyButton funktion='minimize'>
                        </WavyButton>
                        <WavyButton funktion= 'maximize'>
                        </WavyButton>
                        <WavyButton funktion='close' use={handleRemove}>
                        </WavyButton>
                    </div>
                    <div className={style.container}>
                        <div className={style.toolbar}>
                            <div className={style.innen}>Hello</div>
                            <div className={style.searchbar}>Search Items...</div>
                        </div>
                        <div className={style.inhalt}>        
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Kasten;