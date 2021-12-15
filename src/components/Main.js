import profileAvatar from "../images/profile/avatar-gem.png"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"

function Main({onEditAvatar, onEditProfile, onAddPlace, ...props}) {
  
  return (
      <main className="main page__main">
        <section aria-label="Профиль пользователя"
                 className="profile main__profile">
          <div className="profile__bio">
            <div className="profile__avatar-wrapper">
              <img alt="Фотография профиля пользователя"
                   className="profile__avatar"
                   src={ profileAvatar }/>
              <button className="button profile__avatar-btn"
                      onClick={ onEditAvatar }/>
            </div>
            <div className="profile__details">
              <div className="profile__row">
                <h1 className="profile__name"/>
                <button className="button profile__edit-btn"
                        type="button"
                        onClick={ onEditProfile }/>
              </div>
              <p className="profile__desc"/>
            </div>
            <button className="button profile__add-btn"
                    type="button"
                    onClick={ onAddPlace }/>
          </div>
        </section>
        <section aria-label="Фотографии пользователя"
                 className="gallery">
          <ul className="gallery__grid">
          </ul>
        </section>
        
        <PopupWithForm name="avatar"
                       title="Обновить аватар">
          <input aria-label="Поле ввода для ссылки на картинку"
                 className="modal__input modal__input_field_avatar"
                 id="field_avatar"
                 name="avatar-field-link"
                 placeholder="Ссылка на новую картинку профиля"
                 required
                 type="url"/>
          <span className="modal__error modal__error_field_avatar"/>
        </PopupWithForm>
        
        <PopupWithForm name="bio"
                       title="Редактировать профиль">
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
        </PopupWithForm>
        
        <PopupWithForm name="card"
                       title="Новое место"
                       buttonText="Создать">
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
        </PopupWithForm>
        
        <PopupWithForm name="confirm"
                       title="Вы уверены?"
                       buttonText="Да">
        </PopupWithForm>
        
        <ImagePopup/>
      
      </main>
  
  )
}

export default Main
