import React, { useEffect, useRef, useState } from 'react'
import FormAddress from './FormAddress'

export const GPlace = ({ updateAddress, initialAddress }) => {
  const placeInputRef = useRef({})
  const [address, setAddress] = useState(initialAddress)

  // EFFECTS
  useEffect(() => {
    updateAddress(address)
    console.log('hello', placeInputRef.current.value)
  }, [placeInputRef.current])

  useEffect(() => {
    initPlaceAPI()
    updateAddress(address)
  }, [address])

  // END EFFECT

  const initPlaceAPI = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      placeInputRef.current,
    )
    new window.google.maps.event.addListener(
      autocomplete,
      'place_changed',
      function () {
        const place = autocomplete.getPlace()
        setAddress(place.address_components)
      },
    )
  }
  return (
    <input
      type="text"
      ref={placeInputRef}
      onChange={(e) => {
        if (!e.target.value) {
          setAddress([])
        }
      }}
    />
  )
}
const Address = () => {
  const [address, setAddress] = useState([])
  const updateAddress = (values) => setAddress(values)
  return (
    <div className="App">
      <GPlace updateAddress={updateAddress} initialAddress={address} />
      <FormAddress address={address} />
    </div>
  )
}

export default Address
