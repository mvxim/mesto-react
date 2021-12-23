class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl
    this._headers = headers
  }
  
  _onResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`>>> Ошибка: ${ res.status }`)
  }
  
  getUserInfo() {
    return fetch(`${ this._url }users/me/`, {
      method: "GET",
      headers: this._headers
    }).then(this._onResponse)
  }
  
  setUserInfo(userInfo) {
    return fetch(`${ this._url }users/me/`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(
          {
            name: userInfo["bio-field-name"],
            about: userInfo["bio-field-desc"],
          }
      )
    }).then(this._onResponse)
  }
  
  setUserAvatar(avatarLink) {
    return fetch(`${ this._url }users/me/avatar/`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(
          {
            avatar: avatarLink
          }
      )
    }).then(this._onResponse)
  }
  
  getSetOfPlaces() {
    return fetch(`${ this._url }cards`, {
      method: "GET",
      headers: this._headers
    }).then(this._onResponse)
  }
  
  createNewPlace({ name, link }) {
    return fetch(`${ this._url }cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(
          {
            name: name,
            link: link
          }
      )
    }).then(this._onResponse)
  }
  
  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${ this._url }cards/likes/${ cardId }`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._onResponse)
    } else {
      return fetch(`${ this._url }cards/likes/${ cardId }`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._onResponse)
    }
  }
  
  removePlace(cardId) {
    return fetch(`${ this._url }cards/${ cardId }`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._onResponse)
  }
}

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-30/",
  headers: {
    authorization: "a2e8d35a-8087-4045-b36f-fee28ac34f65",
    "Content-Type": "application/json"
  }
})

export default api
