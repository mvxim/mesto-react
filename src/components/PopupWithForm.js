import { useEffect } from "react"

function PopupWithForm({
                         name,
                         title,
                         buttonText = "Сохранить",
                         children,
                         isOpen,
                         onClose
                       }) {
  
  useEffect(() => {
    const handleOverlayClose = e => {
      if (e.target.classList.contains("modal")) {
        onClose()
      }
    }
    
    const handleEscClose = e => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("mousedown", handleOverlayClose)
      window.addEventListener("keydown", handleEscClose)
    }
    return () => {
      window.removeEventListener("keydown", handleEscClose)
      window.removeEventListener("mousedown", handleOverlayClose)
    }
    
  }, [ isOpen, onClose ])
  
  return (
      <section className={ `modal modal_type_${ name } page__modal ${ isOpen ? "modal_active" : "" }` }>
        <div className="modal__container">
          <button className="modal__close-btn"
                  type="button"
                  onClick={ onClose }/>
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
