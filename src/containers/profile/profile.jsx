import React, { useEffect, useRef } from 'react'
import InputText from '../../components/form/input-text/input-text'
import useValidateForm from './utils/use-validate-form'

const Profile = ({ handleErrors, handleSubmit, errors }) => {
  const formRefs = useRef({})
  const validateForm = useValidateForm(formRefs, handleErrors, errors)

  useEffect(() => {
    formRefs.current.firstName.focus()
  }, [])

  const currentRef = formRefs.current

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <InputText
          label="Prénom"
          name="firstName"
          ref={(el) => (currentRef['firstName'] = el)}
          onBlur={() => validateForm.firstName()}
          error={currentRef && currentRef.errors && currentRef.errors.firstName}
          minLength={5}
          maxLength={20}
        />
        <InputText
          label="Nom"
          name="lastName"
          ref={(el) => (currentRef['lastName'] = el)}
          onBlur={() => validateForm.lastName()}
          error={currentRef && currentRef.errors && currentRef.errors.lastName}
          minLength={5}
          maxLength={20}
        />
      </form>
    </div>
  )
}

export default Profile
