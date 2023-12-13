import React,{useState , useEffect} from "react";
import { Text , View , Button , TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'; //salvar dados do login no celular
import {Profile , Cadastro , Edicao} from "../index"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "../../assets/css/css";
import Icon from 'react-native-vector-icons/FontAwesome';




export default function AreaRestrita(props) {

    const Tab = createMaterialBottomTabNavigator();

    return(
        <SafeAreaView style={{flex:1}}>
            <Tab.Navigator activeColor="#c50000" inactiveColor="#fff" barStyle={css.areaTab} >
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({color}) => (
                      <Icon name="user" size={20} color={color} />
                    ),
                  }}
                />

                <Tab.Screen name="Cadastro" component={Cadastro} 
                options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="archive" size={20} color={color} />
                    ),
                  }}
                />

                <Tab.Screen name="Edicao" component={Edicao}
                options={{
                    tabBarIcon: ({ color }) => (
                      <Icon name="edit" size={20} color={color} />
                    ),
                  }}
                />

            </Tab.Navigator>
        </SafeAreaView>
    )
}