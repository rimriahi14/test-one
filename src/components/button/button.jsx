import PropTypes from 'prop-types'

const Button = ({ type, children }) => {
  return <button type={type}>{children}</button>
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}
Button.defaultProps = {
  type: 'submit',
}

export default Button
