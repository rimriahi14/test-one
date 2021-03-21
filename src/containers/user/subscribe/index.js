import React, { useState, useEffect } from 'react'
import MultiStep from '../../../components/multi-step/multi-step'
import Address from '../../address/address'
import Profile from '../../profile/profile'

function Subscribe() {
  const [errors, setErrors] = useState(false)
  const [disabledNextButton, setDisabledNextButton] = useState(true)
  const handleErrors = (values) => setErrors(values)

  // handle submit on button next step
  const handleSubmit = () => {}
  useEffect(() => {
    if (Object.keys(errors).every((item) => errors[item])) {
      setDisabledNextButton(true)
    } else {
      setDisabledNextButton(false)
    }
  }, [errors])

  return (
    <div>
      <MultiStep
        views={[
          {
            component: (
              <Profile
                handleSubmit={handleSubmit}
                handleErrors={handleErrors}
                errors={errors}
              />
            ),
          },
          {
            component: <Address />,
          },
        ]}
      />
    </div>
  )
}
export default Subscribe
