import React from "react";
import { View , Text , TouchableOpacity } from "react-native";
import { css } from "../../assets/css/css";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function MenuAreaRestrita(props){

    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login')
    }

    return(
        <View style={css.areaMenu} >

            <TouchableOpacity onPress={()=>props.navigation.navigate("Home")} style={css.buttonHome2}  >
                <Icon name="home" size={25} color={'white'} />
            </TouchableOpacity>

            <View style={css.areaTitle} >
                <Text style={css.textTitle} >{props.title}</Text>
            </View>

            <TouchableOpacity style={css.buttonLogout} onPress={()=>logout()} >
                <Icon name="sign-out" size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )

}