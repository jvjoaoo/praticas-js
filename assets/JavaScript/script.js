/*let criacaoUser = prompt('Digite o usuário');
let criacaoSenha = prompt("Crie uma senha de acesso:")

let loginUser;
let senhaUser;

let subTitulo = document.querySelector('h2')

while(loginUser !== criacaoUser && senhaUser !== criacaoSenha){
loginUser = prompt("Login de acesso: ")
senhaUser = prompt('senha: ')

if(loginUser == criacaoUser && senhaUser == criacaoSenha){
  subTitulo.innerHTML = `Seja bem vindo ao site de JavaScript ${criacaoUser}`
} else {
  alert("Credenciais de acesso incorretas! tente novamente.")
}
}
*/

function botaoClicado() {
  let userName = document.getElementById("nome").value
  let userPassword = document.getElementById("senha").value

  console.log(userName)
  console.log(userPassword)
}
