import { useEffect } from "react"
import useForm from "../hooks/useForm"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose, onPlaceAdd, isLoading }) {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onPlaceAdd({
      name: values.title,
      link: values.picture
    })
  }
  
  useEffect(() => {
    resetForm()
  }, [ resetForm, isOpen ])
  
  
  return (
      <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          isOpen={ isOpen }
          isLoading={ isLoading }
          onClose={ onClose }
          onSubmit={ handleSubmit }
          isFormValid={ isValid }
      >
        <input
            aria-label="Поле ввода для названия карточки"
            className={ `modal__input modal__input_field_title ${ errors["card-field-title"] ? "modal__input_error" : "" }` }
            id="field_title"
            maxLength="30"
            minLength="2"
            name="title"
            placeholder="Название"
            required
            type="text"
            value={ values.title || "" }
            onChange={ handleChange }
        />
        <span className="modal__error modal__error_field_title">
          { errors.title }
        </span>
        <input
            aria-label="Поле ввода для адреса картинки"
            className={ `modal__input modal__input_field_picture ${ errors.picture ? "modal__input_error" : "" }` }
            id="field_picture"
            name="picture"
            placeholder="Ссылочка на картиночку"
            required
            type="url"
            onChange={ handleChange }
            value={ values.picture || "" }
        />
        <span className="modal__error modal__error_field_picture">
          { errors.picture }
        </span>
      </PopupWithForm>
  )
}

export default AddPlacePopup
