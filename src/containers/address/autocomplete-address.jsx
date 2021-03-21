import React, { useEffect, useRef, useState } from 'react'

const AutocompleteAddress = ({ updateAddress, initialAddress }) => {
  const placeInputRef = useRef({})
  const [address, setAddress] = useState(initialAddress)

  useEffect(() => {
    updateAddress(address)
  }, [placeInputRef.current])

  useEffect(() => {
    initPlaceAPI()
    updateAddress(address)
  }, [address])

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

export default AutocompleteAddress
