class Api {
  constructor( token ) {
    this._url = "https://nomoreparties.co/v1/cohort-30/"
    this._headers = {
      authorization: token,
      "Content-Type": "application/json"
    }
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
            name: userInfo.name,
            about: userInfo.about,
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
  
  getPlaces() {
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
    return fetch(`${ this._url }cards/likes/${ cardId }`, {
      method: `${ isLiked ? "DELETE" : "PUT" }`,
      headers: this._headers,
    }).then(this._onResponse)
  }
  
  removePlace(cardId) {
    return fetch(`${ this._url }cards/${ cardId }`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._onResponse)
  }
}

 const api = new Api("a2e8d35a-8087-4045-b36f-fee28ac34f65")

export default api
