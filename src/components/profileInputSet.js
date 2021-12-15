function ProfileInputSet() {
  return(
      <>
        <input aria-label="Поле ввода для имени"
               className="modal__input modal__input_field_name"
               id="field_name"
               maxLength="40"
               minLength="2"
               name="bio-field-name"
               placeholder="Ваше имя"
               required
               type="text"/>
        <span className="modal__error modal__error_field_name"/>
        <input aria-label="Поле ввода для описания"
               className="modal__input modal__input_field_desc"
               id="field_desc"
               maxLength="200"
               minLength="2"
               name="bio-field-desc"
               placeholder="Расскажите о себе"
               required
               type="text"/>
        <span className="modal__error modal__error_field_desc"/>
      </>
  )
  
}

export default ProfileInputSet
