import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './input-text.css'

const InputText = React.forwardRef(
  ({ label, type, name, error, ...props }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          className={error ? 'error-input-text' : ''}
          ref={ref}
          name={name}
          {...props}
        />
      </div>
    )
  }
)

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}
InputText.defaultProps = {
  label: '',
  type: 'text'
}

export default InputText
