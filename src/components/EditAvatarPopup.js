import { useContext, useRef } from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  
  const userAvatar = useRef()
  
  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar(userAvatar.current.value)
  }
  
  return (
      <PopupWithForm name="avatar"
                     title="Обновить аватар"
                     buttonText="Сохранить"
                     isOpen={ isOpen }
                     onClose={ onClose }
                     onSubmit={ handleSubmit }>
        <input aria-label="Поле ввода для ссылки на картинку"
               className="modal__input modal__input_field_avatar"
               id="field_avatar"
               name="avatar-field-url"
               placeholder="Ссылка на новую картинку профиля"
               required
               type="url"
               ref={ userAvatar }/>
        <span className="modal__error modal__error_field_avatar"/>
      </PopupWithForm>
  )
}

export default EditAvatarPopup
