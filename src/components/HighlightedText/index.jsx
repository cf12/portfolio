import React from 'react'

const HighlightedText = (props) => {
  const styles = {
    display: 'inline-block',
    margin: 0,
    color: props.textColor,
    fontSize: props.textSize,
    fontWeight: props.textWeight,
    backgroundColor: props.bgColor,
    padding: '5px'
  }

  return (
    <p className={props.className} style={styles}>
      {props.children}
    </p>
  )
}

export default HighlightedText
