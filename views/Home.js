import React from "react";
import { Text , View , TouchableOpacity ,ImageBackground } from "react-native";
import { css } from "../assets/css/css";
import image from "../assets/img/backgroundHome.jpg"

export default function Home(props) {
    return(
            <ImageBackground style={css.ImgBackgroundHome} source={image}  >
                <TouchableOpacity 
                style={css.button}
                onPress={()=>{
                    props.navigation.navigate('Login')
                }} >
                    <Text style={css.textButton} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={css.button}
                onPress={()=>{
                    props.navigation.navigate('Rastreio')
                }} >
                    <Text style={css.textButton} >Rastreio</Text>
                </TouchableOpacity>
            </ImageBackground>

    )
}