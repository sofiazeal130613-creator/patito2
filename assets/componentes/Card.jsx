import { Pressable } from "react-native";
import { Text, View } from "react-native-web";
import global from "../Styles/Stylesheet";


function Card({ nombre, clase, xp, hp, mana, fuerza, velocidad, habilidades,id,eliminar }) {
 

  
    return(
        <View id={id} style={[global.carta, global[clase]]}>
            <Text style={global.nombre}>{nombre}</Text>
            <Text style={global.clase}>{clase}</Text>
            <View style={global.statsCont}>
                <Text style={global.statsText}>XP: <Text style={global.statsDato}>{xp}</Text></Text>
                <Text style={global.statsText}>HP: <Text style={global.statsDato}>{hp}</Text></Text>
                <Text style={global.statsText}>Mana: <Text style={global.statsDato}>{mana}</Text></Text>
            </View>
            <View style={global.statsCont}>
                <Text style={global.statsText}>Fuerza: <Text style={global.statsDato}>{fuerza}</Text></Text>
                <Text style={global.statsText}>Velocidad: <Text style={global.statsDato}>{velocidad}</Text></Text>
            </View>
            <View style={global.statsCont}>
                <Text style={global.habilidadesTit}>Habilidades</Text>
                <View>
                     {habilidades.map(function(habilidad,index){
                return (<Text style={global.habilidadesText} key={index}>{habilidad}</Text>)
             })}

                </View>
           
            </View>
            <Pressable onPress={function(){eliminar(id)}}><Text>Eliminar</Text></Pressable>
        </View>
    )
}

export default Card;