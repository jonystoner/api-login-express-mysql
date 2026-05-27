//lendo a url 
const parametros = new URLSearchParams(window.location.search);
// vai buscar na url e verificar se consta a algum erro na url
const erro = parametros.get("erro");
// vai buscar quando foi e buscar na url se consta cadastro caso passa caso não ele passa normal 
const cadastro = parametros.get("cadastro");
if (cadastro === "sucesso") {
    document.getElementById("mensagem").innerHTML = `
<div class="mensagem-sucesso">
         Cadastro realizado com sucesso! Faça login para continuar.
</div>
     `;
}
if (erro === "login") {
    document.getElementById("mensagem").innerHTML = `
<div class="mensagem-erro">
         E-mail ou senha incorretos.
</div>
     `;
}