const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const models=require('./models')

const app= express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let user = models.User
let tracking = models.Tracking
let product = models.Product

app.post('/login' ,async (req,res)=>{
    let response = await user.findOne({
        where:{name:req.body.Name, password: req.body.password}
    })
    if (response == null){
        res.send(JSON.stringify('error'))
    } else {
        res.send(response)
    }
})

app.post('/verifyPass' , async (req , res)=>{
    let response = await user.findOne({
        where:{id:req.body.id, password: req.body.senhaAntiga}
    })
    if (response == null){
        res.send(JSON.stringify('Senha antiga não confere!'))
    } else {
        if(req.body.novaSenha === req.body.confNovaSenha){
            response.password = req.body.novaSenha
            response.save()
            res.send(JSON.stringify('Senha atualizada com sucesso!'))
        } else {
            res.send(JSON.stringify('Nova senha e confirmação não conferem!'))
        }
        
    }
})

app.post('/verifyName' , async(req , res)=>{
    let response = await user.findOne({
        where:{id:req.body.id , Name: req.body.nomeAntigo}
    })
    if(response == null){
        res.send(JSON.stringify('Nome antigo não confere!'))
    } else {
        if(req.body.nomeNovo == req.body.confNomeNovo){
            response.Name = req.body.nomeNovo
            response.save()
            res.send(JSON.stringify('Nome de usuário atualizado com sucesso!'))
        } else {
            res.send(JSON.stringify('Novo nome e confirmação não conferem!'))
        }
    }
})

let port=process.env.PORT || 3000

app.listen(port,(req,res)=>{
    console.log('Servidor rodando')
})

/*app.get('/create' , async (req , res) => {
    let create = await user.create({ //create users
        Name: "Thiago",
        password:"abc",
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send('Usuário criado com sucesso!')
})

app.get('/read' , async (req,res)=>{
    let read = await user.findAll({ //ler users
        raw:true
    });
    console.log(read);
});

app.get('/update' , async (req , res)=>{
    let update = await user.findByPk(10).then((response)=>{ //atualizar user de id 10
        response.Name = 'Thiagao'
        response.password = '123'
        response.save()
    })
})

app.get('/delete' , async (req , res)=>{
    user.destroy({ //Excluir user de id 11
        where:{
            id:11
        }
    }) 
})*/