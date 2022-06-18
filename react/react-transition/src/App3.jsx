import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash'

const Animation = (props) => {
    // console.log(props)
    const {
        animation = false,
        transitionStyles = {enter: {opacity: 1}, leave: { opacity: 0}},
        children
    } = props
    // console.log(animation, transitionStyles, children)
    const [status, setStatus] = useState(() => {
        console.log('//////')
        if(animation) return 'enter';
        else return 'leave'
    });
    useEffect(() => setStatus(animation?'enter' : 'leave'), [animation])
    const prevStyle = children?.props?.style || {};
    // console.log(prevStyle)
    const animateStyle = transitionStyles[status];
    const transitionStyle = {transition: `all 300ms ease-in-out`}
    const styles = {...prevStyle, ...animateStyle, ...transitionStyle}
    // return React.cloneElement(
    //     React.children.only(children),
    //     {
    //         style: {
    //             ...styles
    //         }
    //     }
    // )
    return (
        <div style={{...styles}}>
            {children}
        </div>
    )
    // return (
    //     <div>
    //         Animation
    //         {children}
    //     </div>
    // )
}

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setPlay(!play)}>切换</button>
      <Animation animation={play}>
        <div className="box" ></div>
      </Animation>
    </div>
  )
}

export default App