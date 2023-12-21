import React , {useState , useEffect} from "react";
import { View , Text , TouchableOpacity , TextInput } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from '../../config/config.json'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { css } from "../../assets/css/css";

export default function Cadastro({navigation}){


        const adresss = config.origin
        const [code , setCode] = useState(null)
        const [user , setUser] = useState(null)
        const [product , setProduct] = useState(null)
        const [response , setResponse] = useState(null)


        useEffect(()=>{
            getUser()
        },[])

        useEffect(()=>{
            randomCode()
        } , [])

        //Pegar o id do user
        async function getUser(){
            let response = await AsyncStorage.getItem('userData')
            let json = JSON.parse(response)
            setUser(json.id)
        }

        //Gerar um codigo randômico
        async function randomCode(){
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const codeLength = 20;
        
            let randomCode = '';
            for (let i = 0; i < codeLength; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              randomCode += characters.charAt(randomIndex);
            }
            setCode(randomCode)
        }

        //Envio do formulário
        async function sendForm(){
            let response = await fetch()
        }

        return(
            <View>
                <MenuAreaRestrita title='Cadastro' navigation={navigation} />
                <View>
                    <TextInput
                        placeholder="Nome do produto"
                        onChangeText={text=>setProduct(text)}
                    />

                    <TouchableOpacity onPress={()=>sendForm()} >
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}