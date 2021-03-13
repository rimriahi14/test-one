import { useState } from 'react'
import { isEqual } from 'lodash'

const useValidateForm = (formRefs, handleErrors, errors) => {
  // const [errors, setErrors] = useState({})
  const currentRef = formRefs.current
  return {
    firstName: () => {
      if (
        currentRef &&
        currentRef.firstName &&
        currentRef.firstName.value.length < 5
      ) {
        currentRef['errors'] = {
          ...currentRef.errors,
          firstName: true
        }
        if (!isEqual(currentRef.errors, errors)) {
          handleErrors({ ...errors, firstName: true })
        }
      } else {
        currentRef['errors'] = {
          ...currentRef.errors,
          firstName: false
        }
        if (!isEqual(currentRef.errors, errors)) {
          handleErrors({ ...errors, firstName: false })
          currentRef.lastName.focus()
        }
      }
    },
    lastName: () => {
      if (
        currentRef &&
        currentRef.lastName &&
        currentRef.lastName.value.length < 5
      ) {
        currentRef['errors'] = {
          ...currentRef.errors,
          lastName: true
        }
        if (!isEqual(currentRef.errors, errors)) {
          handleErrors({ ...errors, lastName: true })
        }
      } else {
        currentRef['errors'] = {
          ...currentRef.errors,
          lastName: false
        }
        if (!isEqual(currentRef.errors, errors)) {
          handleErrors({ ...errors, lastName: false })
        }
      }
    }
  }
}

export default useValidateForm
