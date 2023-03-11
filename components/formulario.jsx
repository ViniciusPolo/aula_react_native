import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View, ViewBase } from "react-native";

const FormularioUsuario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
           <Text>Nome:</Text> 
           <TextInput value={name} onChangeText={setName}/>
           <Text>Email:</Text> 
           <TextInput value={email} onChangeText={setEmail}/>
           <Text>Phone:</Text> 
           <TextInput value={phone} onChangeText={setPhone}/>
           <Button title="Save" onPress={() => alert("Data Saved")}/>
        </>
    )
}

export default FormularioUsuario