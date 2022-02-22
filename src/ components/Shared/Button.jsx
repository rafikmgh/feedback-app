import { version } from "react-dom"
import PropTypes from 'prop-types'
const Button = ({children, version , type , isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className ={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : 'button',
    disabled : 'false',
}

Button.propTypes ={
  children : PropTypes.node.isRequired,
  version : PropTypes.string,
  type : PropTypes.string,
  isDisabled : PropTypes.bool,
}

export default Button