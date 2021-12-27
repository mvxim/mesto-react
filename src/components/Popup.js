import { useEffect } from "react"

const Popup = ({ isOpen, name, onClose, children }) => {
  

  
  useEffect(() => {
    if (!isOpen) return
  
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    
    return () => {
      document.body.style.overflow = "auto"
      document.body.style.paddingRight = null;
    }
  }, [isOpen])
  
  useEffect(() => {
    if (!isOpen) return
    
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    
    document.addEventListener("keydown", closeByEscape)
    return () => document.removeEventListener("keydown", closeByEscape)
    
  }, [ isOpen, onClose ])
  
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  
  
  return (
      <section
          className={ `modal modal_type_${ name } page__modal ${ isOpen ? "modal_active" : "" }` }
          onClick={ handleOverlay }
      >
        <div className={ `modal__${ name === "picture" ? "figure" : "container" }` }>
          <button
              className="modal__close-btn"
              type="button"
              onClick={ onClose }
          />
          { children }
        </div>
      
      </section>
  )
}

export default Popup
