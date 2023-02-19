import React from 'react'
import './Box.css'

const Box = ({value, onClick}) => {
    let style = (value === 'X' ? "box x" :"box o");

  return (
    <button type='button' className={style} onClick={onClick}>
        {value}
    </button>
  )
}

export default Box