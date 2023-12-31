import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    //Home: 
    ImgBackgroundHome:{
        gap:50,
        resizeMode: "cover",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        textAlign:"center",
        backgroundColor:"#2F83E6",
        width:350,
        height:100,
        justifyContent:'center',
        borderRadius:30,
    },
    textButton:{
        color:"white",
        fontSize:45,
        textAlign:'center',
    },

    //Login:

    backgroundLogin:{
        backgroundColor:'#2F83E6',
        height:'100%',
        justifyContent:'center'
    },
    logoLoginView:{
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    logoLogin:{
        width:180,
        height:150,
    },
    loginMsg:(text = 'none')=>({
        color:'white',
        fontWeight:'bold',
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
        textAlign:'center',
        display:text,
    }),
    loginForm:{
        width:'100%',
        alignItems:'center'
    },
    loginInput:{
        backgroundColor:'white',
        fontSize:19,
        padding:7,
        marginBottom:15,
        width:'80%'
    },
    loginBtn:{
        backgroundColor:'#c50000',
        width:'50%',
        height:'22%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    loginBtnText:{
        color:'white',
        fontSize:20,
    },

    //AreaRestrita:

    areaTab:{
        fontSize:30,
        fontWeight:'bold',
        color:"pink",
    },

    //AreaRestrita -> Profile

    areaMenu:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#2F83E6',
        height:80
    },
    buttonHome2:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    areaTitle:{
        width:'70%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        color:'#c50000'
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#c50000',
    },
    buttonLogout:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },

    buttonGoChange:{
        width:'50%',
        backgroundColor:'#2F83E6',
        marginTop:'10%',
        marginLeft:'25%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },

    goChangeText:{
        color:'white'
    },

    //TrocarSenha e Nome de Usuario:

    containerTrocar:{
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'90%',
    },

    textTrocar:{
        fontSize:20,
    },

    btnTrocar:{
        marginTop:20,
        width:'50%',
        height:'8%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },

    textBtnTrocar:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },

    errorTrocar:{
        color:'red',
        marginBottom:10,
        fontSize:20
    },

    btnTrocarNomeUser:{
        marginTop:20,
        width:'80%',
        height:'8%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },

    //cadastro:


    //edição
    qr__code:(display='flex')=>({
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        justifyContent:'center',
        display:display,
    }),
    qr__form:(display='none')=>({
        width:'100%',
        display:display,
    })
})
export {css}