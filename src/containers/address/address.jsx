import React, { useState } from 'react'
import FormAddress from './form-address'
import AutocompleteAddress from './autocomplete-address'

const Address = () => {
  const [address, setAddress] = useState([])
  const updateAddress = (values) => setAddress(values)
  return (
    <div className="App">
      <AutocompleteAddress
        updateAddress={updateAddress}
        initialAddress={address}
      />
      <FormAddress address={address} />
    </div>
  )
}

export default Address
