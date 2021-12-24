import Popup from "./Popup"

function PopupWithForm({
  name,
  title,
  buttonText = "Сохранить",
  children,
  isOpen,
  onClose,
  onSubmit,
  isLoading
}) {
  return (
    <Popup isOpen={ isOpen }
      name={ name }
      onClose={ onClose }>
      <form className="modal__form"
        name={ `${name}-form` }
        onSubmit={ onSubmit }>
        <h2 className="modal__title">{ title }</h2>
        { children }
        <button className="button modal__button"
          type="submit">
          { isLoading ? "⏳ Сохранение..." : buttonText  }
        </button>
      </form>
    </Popup>
  )
}

export default PopupWithForm
