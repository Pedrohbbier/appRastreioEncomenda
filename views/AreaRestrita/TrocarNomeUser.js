import React, { useState , useEffect } from "react";
import { View , TouchableOpacity , Text , TextInput} from "react-native";
import { css } from "../../assets/css/css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from '../../config/config.json'

export default function TrocarNomeUser({navigation}){

    const [idUser , setIdUser] = useState(null)
    const [nomeAntigo , setNomeAntigo] = useState(null)
    const [nomeNovo , setNomeNovo] = useState(null)
    const [confNomeNovo , setConfNomeNovo] = useState(null)
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
        let response =  await fetch(config.urlRoot+'verifyName',{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                nomeAntigo: nomeAntigo,
                nomeNovo: nomeNovo,
                confNomeNovo: confNomeNovo
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
            <Text style={css.errorTrocar} ></Text>

            <TextInput placeholder="Nome antigo:"  onChangeText={text=>setNomeAntigo(text)}  style={css.textTrocar} placeholderTextColor='#2F83E6'  />
            <TextInput placeholder="Nome novo:" onChangeText={text=>setNomeNovo(text)} style={css.textTrocar} placeholderTextColor='#2F83E6' />
            <TextInput placeholder="Confirmar novo nome:" onChangeText={text=>setConfNomeNovo(text)} style={css.textTrocar} placeholderTextColor='#2F83E6' />

            <TouchableOpacity style={css.btnTrocarNomeUser} onPress={()=>{sendForm() }} >
               <Text style={css.textBtnTrocar} >Trocar nome de usuario</Text>
            </TouchableOpacity>
        </View>
    )
}