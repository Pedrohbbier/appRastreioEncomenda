import React ,{useState , useEffect} from "react";
import { View , Text , TouchableOpacity , TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { css } from "../../assets/css/css";
import config from '../../config/config.json'


export default function TrocarSenha({navigation}){

    const [idUser , setIdUser] = useState(null)
    const [senhaAntiga , setSenhaAntiga] = useState(null)
    const [novaSenha , setNovaSenha] = useState(null)
    const [confNovaSenha , setConfNovaSenha] = useState(null)
    const [msg , setMsg] = useState(null)

    useEffect(()=>{
        async function getIdUser(){
            let response = await AsyncStorage.getItem('userData')
            let json=JSON.parse(response)
            setIdUser(json.id)
        }
        getIdUser();
    })

    async function sendForm(){
        let response =  await fetch(config.urlRoot+'verifyPass',{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        })
        let json = await response.json()
        console.log(json)
        setMsg(json)
    }

    return(
        <View style={css.containerTrocar} >
            <Text style={css.errorTrocar} >{msg}</Text>

            <TextInput placeholder="Senha Antiga:" onChangeText={text=>setSenhaAntiga(text)}  style={css.textTrocar} placeholderTextColor='#2F83E6'  />
            <TextInput placeholder="Nova Senha:" onChangeText={text=>setNovaSenha(text)} style={css.textTrocar} placeholderTextColor='#2F83E6' />
            <TextInput placeholder="Confirmação Nova Senha" onChangeText={text=>setConfNovaSenha(text)} style={css.textTrocar} placeholderTextColor='#2F83E6' />

            <TouchableOpacity onPress={()=>sendForm()} style={css.btnTrocar} >
               <Text style={css.textBtnTrocar} >Trocar</Text>
            </TouchableOpacity>
        </View>
    )
}