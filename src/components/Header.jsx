import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }

  return (
    //inline styling
    <header style={ headerStyles }>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//Default Prop
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}
//not really used/need unless you need type checking like for typescript
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header;