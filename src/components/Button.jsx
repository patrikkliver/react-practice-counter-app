function Button ({text, onClick, counter}) {
  const disabled = (text !== 'Reset' ? (counter > 9 || counter < -9 ? true : false) : (counter > 9 || counter < -9 ? false : true))

  return (
    <button onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default Button