function CardInputSet() {
  return(
      <>
        <input aria-label="Поле ввода для названия карточки"
               className="modal__input modal__input_field_title"
               id="field_title"
               maxLength="30"
               minLength="2"
               name="card-field-title"
               placeholder="Название"
               type="text"/>
        <span className="modal__error modal__error_field_title"/>
        <input aria-label="Поле ввода для адреса картинки"
               className="modal__input modal__input_field_picture"
               id="field_picture"
               name="card-field-picture"
               placeholder="Ссылочка на картиночку"
               type="url"/>
        <span className="modal__error modal__error_field_picture"/>
      </>
  )
  
}
export default CardInputSet
