import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  
  const currentUser = useContext(CurrentUserContext)
  
  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateUser({
      name, about: description,
    })
    
  }
  
  useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [ currentUser ])
  
  return (
      <PopupWithForm name="bio"
                     title="Редактировать профиль"
                     buttonText="Сохранить"
                     isOpen={ isOpen }
                     onClose={ onClose }
                     onSubmit={ handleSubmit }>
        <input aria-label="Поле ввода для имени"
               className="modal__input modal__input_field_name"
               id="field_name"
               maxLength="40"
               minLength="2"
               name="bio-field-name"
               placeholder="Ваше имя"
               required
               type="text"
               value={ name }
               onChange={ handleNameChange }/>
        <span className="modal__error modal__error_field_name"/>
        <input aria-label="Поле ввода для описания"
               className="modal__input modal__input_field_desc"
               id="field_desc"
               maxLength="200"
               minLength="2"
               name="bio-field-desc"
               placeholder="Расскажите о себе"
               required
               type="text"
               value={ description }
               onChange={ handleDescriptionChange }/>
        <span className="modal__error modal__error_field_desc"/>
      </PopupWithForm>
  
  )
}

export default EditProfilePopup
