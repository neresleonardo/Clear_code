// Não se pode alterar uma váriavel de dentro de uma função
// Crie o habito de não alterar as coisas de dentro de uma função

let users = [{nome: "a"}, {nome:"b"}];

AddFromFacebook(users);
GetFirstUser(users);

// abc.js
function AddFromFacebook(users) {
    let usersArray = [...users]
    let isMonday = true;
    if(isMonday) {
        usersArray.lenght = 0
    }else {
        usersArray.push({nome:"facee"})
    }
    return usersArray;
}

// user.js
function GetFirstUser(users) {
    return users[0]
}