import profileAvatar from "../images/profile/avatar-gem.png"

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
        
      </main>
  
  )
}

export default Main
