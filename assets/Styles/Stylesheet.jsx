import { StyleSheet } from "react-native";

const global = StyleSheet.create({

    contenedor:{
        width:"100%",
        maxWidth:1200,
        padding:30,
        backgroundColor:"#313131",
        margin:"auto",
        marginTop:50,
        flex:1

    },
    titulo:{
        fontSize:40,
        textAlign:"center",
        color:"#fff"
    },
    flatCont:{
        width:"100%",
   gap:20
    },
    rowCont:{
            justifyContent:"center",
            gap:20
     
    },
    carta:{
        width:250,
        minHeight:350,
        padding:10,
        borderRadius:10,
        flexDirection:"column",
       
    },
    nombre:{
        fontSize:22,
        fontWeight:700,
         color:"#fff"
    },
    clase:{
        fontSize:17,
        fontWeight:500,
        fontStyle:"italic",
         color:"#fff8"
    },
    statsCont:{
        marginTop:20,
        padding:10,
        backgroundColor:"#fff5",
        borderRadius:10
    },
    statsText:{
        fontWeight:700
    },
    statsDato:{
           fontWeight:400
    },
    habilidadesTit:{
         fontSize:17,
          fontWeight:700
    },
    habilidadesText:{
        paddingLeft:10
    },
    Mago:{
        backgroundColor:"#a141c7"
    },
    Guerrero:{
        backgroundColor:"#b93434"
    },
    Arquero:{
        backgroundColor:"#84bc14"
    },
    Explorador:{
        backgroundColor:"#2735b4"
    },

});



export default global;