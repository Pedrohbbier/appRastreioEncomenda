import React , {useState , useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home , Login} from './views/index'
import Rastreio from './views/AreaRestrita/Rastreio';
import AreaRestrita from './views/AreaRestrita/AreaRestrita';
import TrocarSenha from './views/AreaRestrita/trocarSenha';


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{
          title: "Bem vindo",
          headerStyle: {backgroundColor: '#2F83E6'},
          headerTintColor: "#c50000",
          headerTitleStyle:{fontWeight:'bold' , fontSize:25}
        }} />

        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen name="Rastreio" component={Rastreio} />

        <Stack.Screen name="AreaRestrita" component={AreaRestrita} 
          options={{headerShown:false}}
        />

        <Stack.Screen name='TrocarSenha' component={TrocarSenha} />


      </Stack.Navigator>
    </NavigationContainer>
  );

}