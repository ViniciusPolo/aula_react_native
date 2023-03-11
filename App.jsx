import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View, ViewBase } from "react-native";
import FormularioUsuario from "./components/formulario";
import Navbar from "./components/navbar";

export default function App() {
    const [cont, setCont ] = useState(0)
    var contador = 0
    function Cont(){
        setCont(cont + 1)
       
    }

    return(
        <View>
        <Navbar/>
        <Text style={styles.title}>Hello World</Text>
        <TextInput/>
        <Button title={`pressed ${cont} times`} onPress={Cont}/>
        <FormularioUsuario/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 32,
        color: '#0f111',
        fontWeight: 'bold',
    },
})