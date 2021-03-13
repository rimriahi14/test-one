import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MultiStep = ({ views }) => {
  const [step, setStep] = useState(0)
  const [disabledNextStep, setDisabledNextStep] = useState(false)
  const [disabledPrevStep, setDisabledPrevStep] = useState(true)

  const handleNextStep = () => {
    setStep(step + 1)
    // à modifier
    if (views[step].onClick) views[step].onClick()
  }
  const handlePrevStep = () => {
    setStep(step - 1)
  }
  useEffect(() => {
    if (step >= views.length - 1) {
      setDisabledNextStep(true)
    } else {
      setDisabledNextStep(false)
    }
    if (step !== 0) {
      setDisabledPrevStep(false)
    } else {
      setDisabledPrevStep(true)
    }
  }, [step])

  return (
    <div>
      {views[step].component}
      <button onClick={() => handlePrevStep()} disabled={disabledPrevStep}>
        Previous
      </button>
      <button onClick={() => handleNextStep()} disabled={disabledNextStep}>
        Next
      </button>
    </div>
  )
}

MultiStep.propTypes = {
  views: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.node.isRequired,
      onClick: PropTypes.func
    }).isRequired
  )
}
MultiStep.defaultProps = {}

export default MultiStep
