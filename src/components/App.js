import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function App() {
  const handleEditAvatarClick = () => {
    document.querySelector(".modal_type_avatar").classList.add("modal_active")
  }
  
  const handleEditProfileClick = () => {
    document.querySelector(".modal_type_bio").classList.add("modal_active")
  }
  
  const handleAddPlaceClick = () => {
    document.querySelector(".modal_type_card").classList.add("modal_active")
  }
  
  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditAvatar={ handleEditAvatarClick }
                onEditProfile={ handleEditProfileClick }
                onAddPlace={ handleAddPlaceClick }/>
          <Footer/>
        </div>
        <template className="gallery__item-template">
          <li className="gallery__item">
            <div className="gallery__image-container">
              <div className="gallery__image-wrapper">
                <img className="gallery__image"/>
              </div>
            </div>
            <button className="delete gallery__delete-btn"
                    type="button"/>
            <div className="gallery__caption">
              <p className="gallery__text"/>
              <div className="gallery__like-btn-wrapper">
                <button className="like gallery__like-btn"
                        type="button"/>
                <span className="gallery__like-btn-counter"/>
              </div>
            </div>
          </li>
        </template>
      </div>
  )
}

export default App
