import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import useForm from "../hooks/useForm"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const currentUser = useContext(CurrentUserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateUser({
      name: values.name,
      about: values.about
    })
  }
  
  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm()
  }, [ resetForm, isOpen, currentUser ])
  
  
  return (
      <PopupWithForm
          name="bio"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={ isOpen }
          isLoading={ isLoading }
          onClose={ onClose }
          onSubmit={ handleSubmit }
          isFormValid={ isValid }
      >
        <input
            aria-label="Поле ввода для имени"
            className="modal__input modal__input_field_name"
            id="field_name"
            maxLength="40"
            minLength="2"
            name="name"
            placeholder="Ваше имя"
            required
            type="text"
            value={ values.name || "" }
            onChange={ handleChange }
        />
        <span className="modal__error modal__error_field_name">
          { errors.name }
        </span>
        <input
            aria-label="Поле ввода для описания"
            className="modal__input modal__input_field_desc"
            id="field_desc"
            maxLength="200"
            minLength="2"
            name="about"
            placeholder="Расскажите о себе"
            required
            type="text"
            value={ values.about || "" }
            onChange={ handleChange }
        />
        <span className="modal__error modal__error_field_desc">
          { errors.about }
        </span>
      </PopupWithForm>
  
  )
}

export default EditProfilePopup
