import { useEffect } from "react"
import useForm from "../hooks/useForm"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateAvatar(values["avatar-field-url"])
  }
  
  useEffect(() => {
    resetForm()
  }, [resetForm])
  
    return (
      <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={ isOpen }
          isLoading={ isLoading }
          onClose={ onClose }
          onSubmit={ handleSubmit }
          isFormValid={ isValid }
      >
        <input
            aria-label="Поле ввода для ссылки на картинку"
            className={ `modal__input modal__input_field_avatar ${ errors["avatar-field-url"] ? "modal__input_error" : "" }` }
            id="field_avatar"
            name="avatar-field-url"
            placeholder="Ссылка на новую картинку профиля"
            required
            type="url"
            value={ values["avatar-field-url"] || ""}
            onChange={ handleChange }
        />
        <span className="modal__error modal__error_field_avatar">
          { errors["avatar-field-url"] }
        </span>
      
      </PopupWithForm>
  )
}

export default EditAvatarPopup
