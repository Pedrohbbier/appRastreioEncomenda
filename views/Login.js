import React from "react";
import { Platform } from "react-native";
import { View , Text , KeyboardAvoidingView , Image,
    TextInput , TouchableOpacity 
} from "react-native";
import { css } from "../assets/css/css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";



export default function Login(){

    const [display , setDisplay] = useState('none')
    const [user , setUser] = useState('null')
    const [password , setPassword] = useState('null')
    const [login , setLogin] = useState('null')

    async function sendForm(){ //funcão responsável pelo envio do formulário de login
        let response = await fetch ('http://192.168.1.11:3000/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Name:user,
              password: password,
            }),
        })
        let json = await response.json()
        if (json == 'error'){
            setDisplay('flex')
            setTimeout(()=>{
                setDisplay('none')
            } , 5000)
        }
    }

    return(
        <SafeAreaView style={css.backgroundLogin} >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <View style={css.logoLoginView} >
                    <Image style={css.logoLogin} source={require('../assets/img/imgApp.png')} />
                </View>
                <View>
                    <Text style={css.loginMsg(display)} >Usuário ou senha inválidos</Text>
                </View>
                <View style={css.loginForm} >
                    <TextInput placeholder="Usuário" onChangeText={text=>setUser(text)} style={css.loginInput} />
                    <TextInput placeholder="Senha" onChangeText={text=>setPassword(text)} secureTextEntry={true} style={css.loginInput} />
                    <TouchableOpacity style={css.loginBtn} onPress={()=>sendForm()} >
                        <Text style={css.loginBtnText} >Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}