    const conexao = require("../config/database")

    //funão responsavel por cadastrar um novo usuário 
    async function cadastrarUsuario(req,res)  {
        try {
            //captura os dados enviados pelo formulario de cadastro 
            const { nome , email , senha } = req.body;
            
            //valida se todos os campos foram preenchidos 
            if(!nome || !email || !senha){
                return res.send(`
                  <h1> erro no cadastro </h1>
                  <p> Prenche todos os campos </p> 
                  <a href="/cadastro.html"> voltar </a> 
                    `);
            }
            // verifica se ja existe um usuario com o mesmo e-mail 
            const [usuarioExistente] = await conexao.query(
                'select * from usuarios where email = ? ',
                [email]
            );
            if(usuarioExistente.length > 0 ) {
                return res.redirect("/cadastro.html?erro=email")
            } 
            // cadastrando o usuário no banco de dados 
            await conexao.query(
                "insert into usuarios(nome,email,senha) values (?,?,?)",
                [nome,email,senha]
            );
            // redirecionando para o lifin com mensagem de cadastro efetuado com sucesso 
            res.redirect("/login.html?cadastro=sucesso")
        }
        catch (erro){
            console.log("erro ao cadastar usuário", erro);
            res.send("erro ao cadastrar usuário")

        }
    }

    async function realizarLogin(req,res) {
        try {

            const {email, senha} = req.body;

            const [usuarios] = await conexao.query (
                "select * from usuarios where email = ? and senha = ?",
                [email, senha]
            )
            if (usuarios.length === 0){
                res.redirect("/login.html?erro=login")
            } 
            
            const usuario = usuarios[0]
            res.redirect(`/sucesso?nome=${usuario.nome}`)
        }
        catch (erro) {
            console.log("erro ao realizar login", erro)
            res.send("erro ao realizar login")
        }
        
    } 