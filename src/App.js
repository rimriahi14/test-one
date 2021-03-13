import React, { useState, useEffect } from 'react'
import MultiStep from './components/multi-step/multi-step'
import CreateUser from './containers/user/create-user/create-user'

// Examples components
const Hello = () => <div>Hello</div>
const GoodBye = () => <div>GoodBye</div>
const Happy = () => <div>Happy :)</div>

function App () {
  const [errors, setErrors] = useState(false)
  const [disabledNextButton, setDisabledNextButton] = useState(true)
  const handleErrors = values => setErrors(values)

  // handle submit on button next step
  const handleSubmit = () => {
    console.log('handle submit')
  }
  useEffect(() => {
    if (Object.keys(errors).every(item => errors[item])) {
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
              <CreateUser
                handleSubmit={handleSubmit}
                handleErrors={handleErrors}
                errors={errors}
              />
            ),
            disabledNextButton,
            onClick: handleSubmit
          },
          {
            component: <Hello />
          },
          {
            component: <GoodBye />
          },
          {
            component: <Happy />
          }
        ]}
      />
    </div>
  )
}
export default App
