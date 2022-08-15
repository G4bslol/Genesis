const  url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUsers(newUser) {
    axios.post(url)
    .then(response => {
        console.log(response)
    }) 
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
        userID.textContent = response.data.id
    })
    .catch(error => console.error(error))

}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, updateUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))

}

const userUpdated = {
    name: "Marcelo",
    city: "Gramado",
    avatar: "https://avatars1.githubusercontent.com/u/11941709?v=4"
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(2)
updateUser(3)
getUsers()
getUser(1)

const newUser = {
    name: "Gabriel",
    avatar: "https://picsum.photos/300/200",
    city: "Nova Iorque"
}

// addNewUsers(newUser)