const defaultColor = '#4A80B9'

const styles = (color = defaultColor) => {
  const defaultStyles = {
    height: 120,
    maxWidth: 300,
    backgroundColor: color,
    border: '1px solid black',
    margin: '40px auto',
    padding: '20px',
    color: '#FFF',
    fontSize: 25,
    transition: 'all .2s ease-in-out'

  }

  const hoverStyles = {
    ...defaultStyles,
    color: color,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: `3px solid ${color}`,
    transform: 'scale(1.1)',
    boxShadow: '4px 4px 5px #999'
  }

  return {
    hoverStyles,
    defaultStyles
  }
}
export default styles
