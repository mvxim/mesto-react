import { useState } from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose, onPlaceAdd }) {
  
  const [ cardName, setCardName ] = useState("")
  const [ cardImageLink, setCardImageLink ] = useState("")
  
  const handleCardNameChange = (e) => {
    setCardName(e.target.value)
  }
  
  const handleCardDescriptionChange = (e) => {
    setCardImageLink(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onPlaceAdd({
      name: cardName,
      link: cardImageLink
    })
  }
  return (
      <PopupWithForm name="card"
                     title="Новое место"
                     buttonText="Создать"
                     isOpen={ isOpen }
                     onClose={ onClose }
                     onSubmit={ handleSubmit }>
        <input aria-label="Поле ввода для названия карточки"
               className="modal__input modal__input_field_title"
               id="field_title"
               maxLength="30"
               minLength="2"
               name="card-field-title"
               placeholder="Название"
               type="text"
               onChange={ handleCardNameChange }/>
        <span className="modal__error modal__error_field_title"/>
        <input aria-label="Поле ввода для адреса картинки"
               className="modal__input modal__input_field_picture"
               id="field_picture"
               name="card-field-picture"
               placeholder="Ссылочка на картиночку"
               type="url"
               onChange={ handleCardDescriptionChange }/>
        <span className="modal__error modal__error_field_picture"/>
      </PopupWithForm>
  )
}

export default AddPlacePopup
