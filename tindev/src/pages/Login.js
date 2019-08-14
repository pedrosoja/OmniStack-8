import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    KeyboardAvoidingView, //Para evitar que no IOS o teclado vá sobre a caixa de texto
    Platform,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Text
 } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', { user })
            }
        })
    }, []);
    
    async function handleLogin() {
        console.log(user);
        const response = await api.post('/devs', { username: user });

        const { _id } = response.data;
        console.log(_id);

        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', { user: _id });
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'ios'} 
            style={style.container}
        >
            <Image source={logo}/>

            <TextInput
                autoCapitalize="none" //Define a palavra como minusculo
                autoCorrect={false} //Desabilita a AUTOCORREÇÃO
                placeholder="Digite seu usuário no GitHub"
                placeholderTextColor="#999"
                style={style.textinput}
                value={user}
                onChangeText={setUser}
            />

            <TouchableOpacity onPress={handleLogin} style={style.button}>
                <Text style={style.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    },
  
    textinput: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,

    }
  });