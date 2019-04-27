import React from 'react'

const HighlightedTitle = (props) => {
  const styles = {
    display: 'inline-block',
    margin: '80px 0',
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

export default HighlightedTitle
