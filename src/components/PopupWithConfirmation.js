import { useEffect } from "react"
import useForm from "../hooks/useForm"
import PopupWithForm from "./PopupWithForm"

function PopupWithConfirmation({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  card
}) {
  
  const { isValid, resetForm } = useForm()
  
  const handleConfirmationAction = (e) => {
    e.preventDefault()
    onSubmit(card)
  }
  
  useEffect(() => {
    resetForm(null, null, true)
  }, [ resetForm, isOpen ])
  
  return (
      <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={ isOpen }
          isLoading={ isLoading }
          onClose={ onClose }
          onSubmit={ handleConfirmationAction }
          isFormValid={ isValid }
      >
      </PopupWithForm>
  )
  
}

export default PopupWithConfirmation
