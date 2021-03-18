import { useRef, useState, useEffect } from 'react'
import InputText from '../../components/form/input-text/input-text'

const FormAddress = ({ address }) => {
  const addressFormRef = useRef({})
  useEffect(() => {
    buildAddressForm()
  }, [address])
  const buildAddressForm = () => {
    console.log('buildAddressForm', address)
    if (!address.length) {
      const emptyValues = [
        'country',
        'locality',
        'postal_code',
        'route',
        'street_number',
        'administrative_area_level_2',
        'administrative_area_level_1',
      ]
      emptyValues.forEach((item) => (addressFormRef.current[item].value = ''))
      return
    }
    address.forEach((item) => {
      if (addressFormRef.current[item.types[0]]) {
        addressFormRef.current[item.types[0]].value = item.long_name
      }
    })
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const values = Object.keys(addressFormRef.current).reduce(
            (acc, item) => {
              return { ...acc, [item]: addressFormRef.current[item].value }
            },
            {},
          )
          console.log('values submit', values)
        }}
      >
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['street_number'] = el)}
          name="street_number"
        />
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['route'] = el)}
          name="route"
        />
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['locality'] = el)}
          name="locality"
        />
        <InputText
          label="Code postale"
          ref={(el) =>
            (addressFormRef.current['administrative_area_level_2'] = el)
          }
          name="administrative_area_level_2"
        />
        <InputText
          label="Code postale"
          ref={(el) =>
            (addressFormRef.current['administrative_area_level_1'] = el)
          }
          name="administrative_area_level_1"
        />
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['country'] = el)}
          name="country"
        />
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['postal_code'] = el)}
          name="postal_code"
        />
        <button type="submit">Valide</button>
      </form>
    </div>
  )
}

export default FormAddress
