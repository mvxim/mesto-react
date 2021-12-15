function PopupWithForm({ name, title, buttonText = "Сохранить", children, ...props }) {
  return (
      <section className={ `modal modal_type_${ name } page__modal` }>
        <div className="modal__container">
          <button className="modal__close-btn"
                  type="button"/>
          <form className="modal__form"
                name={ `${ name }-form` }>
            <h2 className="modal__title">{ title }</h2>
            { children }
            <button className="button modal__button"
                    type="submit">
              { buttonText }
            </button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm
