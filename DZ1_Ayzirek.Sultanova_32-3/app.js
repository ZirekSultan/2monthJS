// hw 1 part 1

var username, password

function register() {
    username = prompt("введите логин")
    password = prompt("введите пароль")
}

function auth () {
    var inputUsername = prompt( "повторите логин")
    var inputPassword = prompt( "повторите логин")

    if(username===inputUsername && password === inputPassword){
    alert("Вы успешно вошли в аккаунт")
    }else {
        alert("Вы ввели неправильный логин или пароль, повторите попытку")
    }
}


register()

auth()

// hw 1 part 2
var word1, word2
function words() {
     word1 = prompt("Введите первое слово")
     word2 = prompt("Введите второе слово")

    if (word1.length > word2.length) {
        alert(`Слово"${word1}" содержит больше символов`)
    }else if (word2.length > word1.length) {
        alert (`Слово "${word2}" содержит больше символов`)

    }else{
        alert("Оба слова содержат одинаковые количество символов")
    }
}

words()