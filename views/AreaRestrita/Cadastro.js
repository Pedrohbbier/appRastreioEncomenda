import React , {useState , useEffect} from "react";
import { View , Text ,Button ,TouchableOpacity , TextInput , Image } from "react-native";
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
            setProduct(null)
        } , [response]) //toda vez que response for alterado vai executar a função randomCode

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
            let response = await fetch(config.urlRoot+'create' , {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                userId: user,
                code: code,
                product: product,
                local: adresss,
                }),
            })
            let json = await response.json()
            setResponse(json)
        }

        return(
            <View>
                <MenuAreaRestrita title='Cadastro' navigation={navigation} />

                {response && (
                    <View>
                        <Image source={{uri:response , height:180, width:180}} />
                        <Button title="Compartilhar" />
                    </View>
                )}

                <View>
                    <TextInput
                        placeholder="Nome do produto"
                        onChangeText={text=>setProduct(text)}
                        value={product}
                    />

                    <TouchableOpacity onPress={()=>sendForm()} >
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}

//parei na aula 21