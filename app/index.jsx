import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import global from "../assets/Styles/Stylesheet";
import Card from "../assets/componentes/Card";

export default function Index() {

 // const URL_API ="http://192.168.40.15:5000";
 const URL_API="https://patito-xmd9.onrender.com/"


  const [personajes, setPersonajes]= useState([]);
  const [filtro, setFiltro]= useState({});
  const [nuevoPersonaje, setNuevoPersonaje]= useState({});

  function actualizarFiltro(key,value){
setFiltro({
  ...filtro,
  [key]:value
})
  }

  function getPersonajes(){

    const response = axios.get(URL_API+"/api/v1/personajes/filtro",
     { params: filtro
    }
    )
    .then(function(res){
      const datos = res.data.data;
      setPersonajes(datos);

    })
    .catch(function(error){
      console.log(error);
      alert(error);
    })


  }

    function crearPersonaje(){
    const response = axios.post(URL_API+"/api/v1/personajes",
      {
             nombre:"Pedro",
        clase:"Mago",
         experiencia:1800 ,
  healthPoints:200,
  mana:520,
  velocidad:10,
  fuerza:50,
  habildades:["Lanzallamas, Bomba de humo, Loro"]
      }
    )
    .then(function(){
       getPersonajes();
      alert("Personaje creado Correctamente");
    })
    .catch(function(error){
console.log(error.response.data
)
    })
  }

    function eliminarPersonaje(id){
        const response = axios.delete(URL_API+"/api/v1/personajes/"+id)
        .then(function(){
             alert("Personaje eliminado Correctamente");
              setPersonajes(
      personajes.filter((p) => p._id !== id)
    );
        })
        .catch(function(error){
console.log(error.response.data.message
)
        })
    }


  useEffect(function(){
  
    const timeout = setTimeout(function(){
 getPersonajes();
    },500)


  return function(){clearTimeout(timeout);}
   
  },[filtro]);


  function itemCard({item}){
    

    return(
      <Card
      id={item._id}
      nombre={item.nombre}
      clase={item.clase}
      xp={item.experiencia}
      hp={item.healthPoints}
      mana={item.mana}
      fuerza={item.fuerza}
      velocidad={item.velocidad}
      habilidades={item.habilidades}
      eliminar={eliminarPersonaje}
      />
    )

  }





  return (
    <View style={global.contenedor}>
      <View style={global.contenedor} >
   <Text style={global.titulo}>Personajes</Text>
      <FlatList
      data={personajes}
      renderItem={itemCard}
      numColumns={3}
      contentContainerStyle={global.flatCont}
      columnWrapperStyle={global.rowCont}
      />
      </View>
   <View>
     <Text>Nombre</Text>
    <TextInput
    placeholder="Ej:Rynn"
    value={filtro.nombre}
    onChangeText={function(text){actualizarFiltro("nombre",text)}}

    />
    <Text>Clase</Text>
    <TextInput
    placeholder="Ej: Guerrero"
    value={filtro.clase}
    onChangeText={function(text){actualizarFiltro("clase",text)}}

    />

     <Text>Experiencia</Text>
     <View>
      <Text>Min</Text>
  <TextInput
    placeholder="0"
    value={filtro.expMin}
    onChangeText={function(text){actualizarFiltro("expMin",text)}}

    />

        <Text>Max</Text>
  <TextInput
    placeholder="5000"
    value={filtro.expMax}
    onChangeText={function(text){actualizarFiltro("expMax",text)}}

    />

     </View>
  
  <View>
    <Text>Crear Personaje</Text>
    <Pressable onPress={crearPersonaje} ><Text>Crear</Text></Pressable>

  </View>





   </View>

   
    
    </View>
  );
}
