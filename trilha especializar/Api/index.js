const url = "http://localhost:5500/api"

// const express = require('express')
// const app = express()

// app.listen('3000')
// console.log('Server On...')

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err));
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err));
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { "Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err));
}
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: { "Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err));
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8"}
    })
     .then(response => response.json())
     .then(data => alertApi.textContent = data)
     .catch(err => console.error(err));

}

const updatedUser = {
    name: "João do Pneu",
    city: "Presidente Venceslau",
    avatar: "http://lorempixel.com.br/300/500"
}
const newUser = {
    name: "Gabriel Lucas",
    city: "London",
    avatar: "http://lorempixel.com.br/500/500"
}

// addUser(newUser)
// updateUser(updatedUser)
getUsers()  
getUser(20)  
// deleteUser()