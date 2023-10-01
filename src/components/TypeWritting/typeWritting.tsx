import {FC, useEffect, useState} from 'react';
import classes from './type.module.css';

type TypeWrittingProps = {
    text:string,
    speed:number,
    fontSize:number,
    clearMessageSpeed:number
}

const TypeWrittingEffect:FC<TypeWrittingProps> = (props) => {
    const {text,speed, fontSize, clearMessageSpeed} = props;
    const [message, setMessage] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isTyping, setTyping] = useState<boolean>(true);

    useEffect(() => {
        if (isTyping) {
            let method = setInterval(() => {
                setIndex((count) => count + 1);
                setMessage(text.substr(0,index));
            },speed);
            
            return () => {
                clearInterval(method);
                if (message === text) {
                    setIndex((count) => count * -1)
                    setTyping(false)
                }
            }
        } else {
            let method = setInterval(() => {
                setIndex((count) => count - 1);
                let messageArray = (message.split(""));
                messageArray.splice(-1,1)
                setMessage(messageArray.join(""));
                if (messageArray.length === 0) {
                    setTyping(true);
                }
            },clearMessageSpeed);
            
            return () => {
                clearInterval(method);
            }
        }
    },[index]);

    return <div className={classes.Container} style={{fontSize: fontSize}}>{message}
    <span className={classes.Cursor} style={{height:fontSize}}></span></div>
};

export default TypeWrittingEffect;