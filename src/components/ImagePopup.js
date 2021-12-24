import Popup from "./Popup"

function ImagePopup({ isOpen, card, onClose }) {
  
  const { link, name } = card
  
  return (
      <Popup
          isOpen={ isOpen }
          onClose={ onClose }
          name="picture"
      >
        <img
            alt={ `Фотография из карточки. Название: ${ name }` }
            className="modal__image"
            src={ link ? link : "" }
        />
        <p className="modal__caption">{ name }</p>
      </Popup>
  )
}

export default ImagePopup
