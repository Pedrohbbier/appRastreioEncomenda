import React ,{useState , useEffect} from "react";
import { View , Text , TouchableOpacity , TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "../../assets/css/css";


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
        let response =  await fetch('http://192.168.1.5:3000/verifyPass',{
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
        <View style={css.containerTrocarSenha} >
            <Text>{msg}</Text>

            <TextInput placeholder="Senha Antiga:" onChangeText={text=>setSenhaAntiga(text)}  style={css.textTrocarSenha} placeholderTextColor='#2F83E6'  />
            <TextInput placeholder="Nova Senha:" onChangeText={text=>setNovaSenha(text)} style={css.textTrocarSenha} placeholderTextColor='#2F83E6' />
            <TextInput placeholder="Confirmação Nova Senha" onChangeText={text=>setConfNovaSenha(text)} style={css.textTrocarSenha} placeholderTextColor='#2F83E6' />

            <TouchableOpacity onPress={()=>sendForm()} >
               <Text>Trocar</Text>
            </TouchableOpacity>
        </View>
    )
}