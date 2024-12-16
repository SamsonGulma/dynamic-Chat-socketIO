const socket = io()

const totalUsers = document.getElementById('total-users')
const messageContainer = document.getElementById("chat-area")
const nameInput = document.getElementById("name-input")
const messageForm = document.getElementById("send-message")
const messageInput = document.getElementById("message-input")

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})


socket.on('clients-total', (data) => {
    totalUsers.innerText = `Total Users: ${data}`
})

function sendMessage() {
    console.log(messageInput.value)
    const data = {
        name: nameInput.value,
        messaage: messageInput.value,
        dateTime: new Date()
    }

    socket.emit('message', data)
}


socket.on('chat-message', (data) => {
    console.log(data)
})