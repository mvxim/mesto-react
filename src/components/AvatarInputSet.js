import React from "react"

function AvatarInputSet() {
  
  return (
      <>
        <input aria-label="Поле ввода для ссылки на картинку"
               className="modal__input modal__input_field_avatar"
               id="field_avatar"
               name="avatar-field-url"
               placeholder="Ссылка на новую картинку профиля"
               required
               type="url"/>
        <span className="modal__error modal__error_field_avatar"/>
      </>
  )
}

export default AvatarInputSet
