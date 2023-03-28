// usamos a condição como Guarda para enpedi que a função execute 

function Login(isAdmin, isLogged, isWifi) {

    if(!isWifi){
        console.log("Só pode entrar aqui se o modo for WIFI!");
        return
    }

    if(!isLogged){
        console.log("Só pode entrar aqui se estiver logado!");
        return
    }

    if(!isAdmin){
        console.log("Só pode entrar aqui se for adm!");
        return
    }

}

// Forma errada

// function Login(isAdmin, isLogged, isWifi) {
//     if (isWifi) {
//       if (isLogged) {
//         if (isAdmin) {
//         } else {
//           console.log("Só pode entrar aqui se for adm!");
//         }
//       }
//     } else {
//       console.log("Só pode entrar aqui se estiver logado");
//     }
//   }


// Usuando ternario 

let contry = " Brasileiro";

let person = ( contry == "Brasil") ? "Brasileiro" : "Outra nacionalidade";

