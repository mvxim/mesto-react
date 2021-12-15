function ImagePopup() {
  return (
      <section aria-label="Полноэкранный просмотр картинки"
               className="modal modal_type_picture page__modal">
        <figure className="modal__figure">
          <button className="modal__close-btn"
                  type="button"/>
          <img alt="Теплый пушистый котенок"
               className="modal__image"
               src="#"/>
          <figcaption className="modal__caption"/>
        </figure>
      </section>
  )
}

export default ImagePopup
