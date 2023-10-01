import {FC, useEffect, useState} from 'react';
import classes from './type.module.css';

type TypeWrittingProps = {
    text:string,
    speed:number,
    fontSize:number
}

const TypeWrittingEffect:FC<TypeWrittingProps> = (props) => {
    const {text,speed, fontSize} = props;
    const [message, setMessage] = useState<string>("");
    const [oldMessage, setOldMessage] = useState<string>(text);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        let method = setInterval(() => {
            setIndex((count) => count + 1);
            setMessage(oldMessage.substr(0,index));
        },speed);
        
        return () => {
            clearInterval(method)
        }
    },[index]);

    useEffect(() => {
        if (message === text){ 
        let method = setTimeout(() => {
            setMessage("");
            setIndex(0)
        },1000)
        return () => {
            clearInterval(method);
        }
    }
    },[message])

    return <div className={classes.Container} style={{fontSize: fontSize}}>{message}
    <span className={classes.Cursor} style={{height:fontSize}}></span></div>
};

export default TypeWrittingEffect;