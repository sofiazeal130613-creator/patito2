import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-web";
import Card from "../assets/componentes/Card";
import global from "../assets/Styles/Stylesheet";

export default function Index() {

  const [personajes, setPersonajes] = useState([]);

function getPersonajes() {
  console.log("Obteniendo personajes...");

  const response = axios.get("http://192.168.40.15:5000/api/v1/personajes")
  .then(function(res){
   const data = res.data.data;
    setPersonajes(data);
  })
  .catch(function(err){
    console.log(err);
  })
}

useEffect(function(){
  getPersonajes();
}, []);

function itemCard({item}){
  return(
    <Card
    nombre={item.nombre}
    clase={item.clase}
    xp={item.experiencia}
    hp={item.healthPoints}
    mana={item.mana}
    fuerza={item.fuerza}
    velocidad={item.velocidad}
    habilidades={item.habilidades}
  
    />
  )

}


  return (
    <View style={global.contenedor}>
      <Text>Personajes</Text>
      <FlatList
      data={personajes}
      numColumns={3}
      renderItem={itemCard}
      contentContainerStyle={global.flatCont}
      columnWrapperStyle={global.rowCont}
      />
    </View>
  );
}
