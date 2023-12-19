import React , {useEffect, useState} from "react";
import { View , StyleSheet, TouchableOpacity , Text } from "react-native";
import {Camera} from 'expo-camera'

export default function AddPhoto(){

    const [hasPermission , setHasPermission] = useState(false)
    const [type , setType] = useState(Camera.Constants.Type.back)

    useEffect(()=>{
        (async()=>{
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    })

    if(hasPermission == false) {
        return(
            <View style={{flex:1 , alignItems:'center' , justifyContent:'center'}} >
                <Text>Sem acesso a câmera</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} >
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{
                            setType(type == Camera.Constants.Type.back ? 
                                Camera.Constants.Type.front : 
                                Camera.Constants.Type.back)
                        }}
                    >
                        <Text style={styles.text}>
                            Flip
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    camera:{
        flex:1,
    },
    buttonContainer:{
        flex:1,
        backgroundColor:'trasparent',
        flexDirection:'row',
        margin:20,
    },
    button:{
        flex:0.1,
        alignSelf:'flex-end',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        color:'white'
    }
})