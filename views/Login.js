import React from "react";
import { Platform } from "react-native";
import { View , Text , KeyboardAvoidingView , Image,
    TextInput , TouchableOpacity 
} from "react-native";
import { css } from "../assets/css/css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; //salvar dados do login no celular

export default function Login({navigation}){

    const [display , setDisplay] = useState('none')
    const [user , setUser] = useState('null')
    const [password , setPassword] = useState('null')
    const [login , setLogin] = useState('null')

    async function sendForm(){ //funcão responsável pelo envio do formulário de login
        let response = await fetch ('http://192.168.1.5:3000/login', { //sempre mudar o ip aqui ao mudar de rede
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
            await AsyncStorage.clear()
        } else {
            await AsyncStorage.setItem('userData',JSON.stringify(json))
            navigation.navigate('AreaRestrita')
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