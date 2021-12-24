import { useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import api from "../utils/api"
import AddPlacePopup from "./AddPlacePopup"
import EditAvatarPopup from "./EditAvatarPopup"
import EditProfilePopup from "./EditProfilePopup"
import Footer from "./Footer"
import Header from "./Header"
import ImagePopup from "./ImagePopup"
import Main from "./Main"
import PopupWithConfirmation from "./PopupWithConfirmation"

function App() {
  const [ currentUser, setCurrentUser ] = useState({
    "name": "",
    "about": "",
    "avatar": "",
    "_id": "",
    "cohort": ""
  })
  
  const [ cards, setCards ] = useState([])
  const [ selectedCard, setSelectedCard ] = useState({ name: "", link: "" })
  const [ cardToRemoveId, setCardToRemoveId ] = useState("")
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false)
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false)
  const [ isConfirmationPopupOpen, setIsConfirmationPopupOpen ] = useState(false)
  
  // Элементы UI блока карточек
  
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id)
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
    }).catch(err => console.log(err))
  }
  
  
  const handleAddPlaceSubmit = (card) => {
    api.createNewPlace(card).then((newFetchedCard) => {
      setCards([ newFetchedCard, ...cards ])
      closeAllPopups()
    })
  }
  
  const handleCardDeleteClick = (cardId) => {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen)
    setCardToRemoveId(cardId)
    console.log(cardId)
  }
  
  const handleCardDelete = (cardToRemoveId) => {
    api.removePlace(cardToRemoveId).then(() => {
      setCards((cards) => cards.filter(c => c._id !== cardToRemoveId))
    }).catch(err => console.log(err))
    closeAllPopups()
  }
  
  // Элементы UI в профиле
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
  }
  
  // Элементы UI в попапах
  
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsConfirmationPopupOpen(false)
    setSelectedCard({ name: "", link: "" })
  }
  
  const handleUpdateUser = (newUserInfo) => {
    api.setUserInfo(newUserInfo).then((newFetchedData) => {
      setCurrentUser(newFetchedData)
      closeAllPopups()
    }).catch()
  }
  
  const handleUpdateAvatar = (newAvatar) => {
    api.setUserAvatar(newAvatar).then((newFetchedAvatar) => {
      setCurrentUser(newFetchedAvatar)
      closeAllPopups()
    })
  }
  
  // Изначальный фетч с сервера
  
  useEffect(() => {
    api.getSetOfPlaces()
        .then((places) => {
          setCards(places)
        }).catch(error => {
      console.log(error)
    })
    api.getUserInfo().then(r => setCurrentUser(r))
  }, [])
  
  return (
      <CurrentUserContext.Provider value={ currentUser }>
        <div className="page">
          <div className="page__container">
            <Header/>
            <Main cards={ cards }
                  onEditAvatar={ handleEditAvatarClick }
                  onEditProfile={ handleEditProfileClick }
                  onAddPlace={ handleAddPlaceClick }
                  onCardClick={ handleCardClick }
                  onCardLike={ handleCardLike }
                  onCardDeleteClick={ handleCardDeleteClick }/>
            <Footer/>
            
            <EditAvatarPopup isOpen={ isEditAvatarPopupOpen }
                             onClose={ closeAllPopups }
                             onUpdateAvatar={ handleUpdateAvatar }/>
            
            <EditProfilePopup isOpen={ isEditProfilePopupOpen }
                              onClose={ closeAllPopups }
                              onUpdateUser={ handleUpdateUser }/>
            
            <AddPlacePopup isOpen={ isAddPlacePopupOpen }
                           onClose={ closeAllPopups }
                           onPlaceAdd={ handleAddPlaceSubmit }/>
            
            <PopupWithConfirmation name="confirm"
                                   isOpen={ isConfirmationPopupOpen }
                                   onClose={ closeAllPopups }
                                   onSubmit={ handleCardDelete }
                                   card={ cardToRemoveId }/>
            
            <ImagePopup card={ selectedCard }
                        onClose={ closeAllPopups }/>
          </div>
        </div>
      </CurrentUserContext.Provider>
  )
}

export default App
