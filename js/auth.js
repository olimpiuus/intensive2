const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeModalAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const loginInput = document.getElementById('login')
const passInput = document.getElementById('password')
const buttonOut = document.querySelector('.button-out')
const userNameSpan = document.querySelector('.user-name')

const login = (user) => {

    modalAuth.style.display = 'none';
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'block';
    userNameSpan.style.display = 'block';
    userNameSpan.textContent = user.login
    localStorage.setItem('user', JSON.stringify(user))
}

const logOut = () => {
    buttonAuth.style.display = 'block';
    buttonOut.style.display = 'none';
    userNameSpan.style.display = 'none';
    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
    loginInput.setAttribute('required', '')
})

closeModalAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
})

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        login: loginInput.value,
        password: passInput.value
    }
    login(user);

})

buttonOut.addEventListener('click', () => {
    logOut()
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
}