import React ,{useState , useEffect} from "react";
import { View , Text , TouchableOpacity , TextInput} from "react-native";
import { css } from "../../assets/css/css";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({navigation}){

    return(
        <View>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
            <TouchableOpacity style={css.buttonGoChangePassword} onPress={()=>navigation.navigate('TrocarSenha')}  >
                <Text style={css.goChangeText} >Trocar Senha</Text>
            </TouchableOpacity>
        </View>
    )
}
