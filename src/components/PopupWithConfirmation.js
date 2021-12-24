import PopupWithForm from "./PopupWithForm"

function PopupWithConfirmation({
                                 isOpen,
                                 onClose,
                                 onSubmit,
                                 card
                               }) {
  
  const handleConfirmationAction = (e) => {
    e.preventDefault()
    onSubmit(card)
  }
  
  return (
      <PopupWithForm name="confirm"
                     title="Вы уверены?"
                     buttonText="Да"
                     isOpen={ isOpen }
                     onClose={ onClose }
                     onSubmit={ handleConfirmationAction }>
      </PopupWithForm>
  )
  
}

export default PopupWithConfirmation
