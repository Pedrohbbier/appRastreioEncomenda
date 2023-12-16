import React from "react";
import { View , Text } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function Edicao({navigation}){
    return(
            <View>
                <MenuAreaRestrita title='Edição' navigation={navigation} />
                <View>
    
                </View>
            </View>
    )
}