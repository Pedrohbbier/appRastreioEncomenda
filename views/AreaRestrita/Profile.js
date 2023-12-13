import React from "react";
import { View , Text , TouchableOpacity } from "react-native";
import { css } from "../../assets/css/css";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({navigation}){

    return(
        <View style={css.areaMenu} >

            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={css.buttonHome2}  >
                <Icon name="home" size={25} color={'white'} />
            </TouchableOpacity>

            <View style={css.areaTitle} >
                <Text style={css.textTitle} >Profile</Text>
            </View>

            <TouchableOpacity style={css.buttonLogout} onPress={()=>navigation.navigate('Login')} >
                <Icon name="sign-out" size={25} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}
