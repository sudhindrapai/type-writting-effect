import React from 'react'
import ReactDOM from 'react-dom/client'
import {TypeWritter} from '../../TypeWritter/src/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<TypeWritter text={'HI this is Sudhindra'} speed={100} fontSize={10} clearMessageSpeed={20} loop={false} />);
