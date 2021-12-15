import { useEffect } from "react"

function ImagePopup(props) {
  
  const { card, onClose } = props
  const { link, name } = card
  
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
    if (card) {
      window.addEventListener("mousedown", handleOverlayClose)
      window.addEventListener("keydown", handleEscClose)
    }
    return () => {
      window.removeEventListener("keydown", handleEscClose)
      window.removeEventListener("mousedown", handleOverlayClose)
    }
    
  }, [ card, onClose ])
  
  return (
      <section aria-label="Полноэкранный просмотр картинки"
               className={ `modal modal_type_picture page__modal ${ card ? "modal_active" : "" }` }>
        <figure className="modal__figure">
          <button className="modal__close-btn"
                  type="button"
          onClick={onClose}/>
          <img alt="Теплый пушистый котенок"
               className="modal__image"
               src={ link }/>
          <figcaption className="modal__caption">{ name }</figcaption>
        </figure>
      </section>
  )
}

export default ImagePopup
