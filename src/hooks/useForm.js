import { useCallback, useState } from "react"

const useForm = () => {
  const [ values, setValues ] = useState({})
  const [ errors, setErrors ] = useState({})
  const [ isValid, setIsValid ] = useState(false)
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    
    setValues({
      ...values,
      [name]: value,
    })
    
    setErrors({
      ...errors,
      [name]: event.target.validationMessage
    })
    
    setIsValid(event.target.closest(".modal__form").checkValidity())
  }
  
  const resetForm = useCallback(() => {
    setValues({})
    setErrors({})
  }, [setValues, setErrors])
  
  
  return {
    values,
    errors,
    handleChange,
    isValid,
    resetForm
  }
}

export default useForm
