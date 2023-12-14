import React from "react";
import { Text , TouchableOpacity ,ImageBackground } from "react-native";
import { css } from "../assets/css/css";
import image from "../assets/img/backgroundHome.jpg"

export default function Home({navigation}) {
    return(
            <ImageBackground style={css.ImgBackgroundHome} source={image}  >
                <TouchableOpacity 
                style={css.button}
                onPress={()=>{
                    navigation.navigate('Login')
                }} >
                    <Text style={css.textButton} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={css.button}
                onPress={()=>{
                    navigation.navigate('Rastreio')
                }} >
                    <Text style={css.textButton} >Rastreio</Text>
                </TouchableOpacity>
            </ImageBackground>

    )
}