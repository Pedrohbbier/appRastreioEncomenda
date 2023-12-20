import React ,{useState , useEffect} from "react";
import { View , Text , TouchableOpacity , TextInput} from "react-native";
import { css } from "../../assets/css/css";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Profile({navigation}){

    return(
        <View>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />

            <TouchableOpacity style={css.buttonGoChange} onPress={()=>navigation.navigate('TrocarSenha')}  >
                <Text style={css.goChangeText} >Trocar Senha</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={css.buttonGoChange} onPress={()=>navigation.navigate('TrocarNomeUser')} >
            <Text style={css.goChangeText} >Trocar Nome de Usuario</Text>
            </TouchableOpacity>

        </View>
    )
}
