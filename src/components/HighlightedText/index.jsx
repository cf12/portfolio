import React from 'react'

const HighlightedText = (props) => {
  const styles = {
    display: 'inline-block',
    color: props.textColor,
    fontSize: props.textSize || 'auto',
    fontWeight: props.textWeight || 'auto',
    backgroundColor: props.bgColor,
    padding: '5px'
  }

  return (
    <p style={styles} className={props.className}>
      {props.children}
    </p>
  )
}

export default HighlightedText
