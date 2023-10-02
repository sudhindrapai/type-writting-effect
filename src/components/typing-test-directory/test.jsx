import {FC} from 'react'
import TypeWrittingEffect from 'typewritting'
const Test = () => {
    return<div>
        <h2>HI</h2>
        <TypeWrittingEffect text={"I am Sudhindra Pai"} speed={400} clearMessageSpeed={100} fontSize={24} loop={true} />
    </div>
};

export default Test