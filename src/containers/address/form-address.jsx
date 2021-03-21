import { useRef, useEffect } from 'react'
import Button from '../../components/button/button'
import InputText from '../../components/form/input-text/input-text'

const buildAddressForm = (address, addressFormRef) => {
  if (!address.length) {
    const emptyValues = [
      'country',
      'locality',
      'postal_code',
      'route',
      'street_number',
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

const FormAddress = ({ address }) => {
  const addressFormRef = useRef({})
  useEffect(() => {
    buildAddressForm(address, addressFormRef)
  }, [address])

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
          console.log('values address', values)
        }}
      >
        <InputText
          label="Numéro de rue"
          ref={(el) => (addressFormRef.current['street_number'] = el)}
          name="street_number"
        />
        <InputText
          label="Rue"
          ref={(el) => (addressFormRef.current['route'] = el)}
          name="route"
        />
        <InputText
          label="Ville"
          ref={(el) => (addressFormRef.current['locality'] = el)}
          name="locality"
        />
        <InputText
          label="Pays"
          ref={(el) => (addressFormRef.current['country'] = el)}
          name="country"
        />
        <InputText
          label="Code postale"
          ref={(el) => (addressFormRef.current['postal_code'] = el)}
          name="postal_code"
        />
        <Button>Valider</Button>
      </form>
    </div>
  )
}

export default FormAddress
