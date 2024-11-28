import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEnderecos } from '../enderecoscontext'; // Importando o hook do contexto
import styles from '../styles';

const NovoEndereco = () => {
  const navigation = useNavigation();
  const { addEndereco } = useEnderecos(); // Função para adicionar um novo endereço ao contexto

  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');

  const handleSave = () => {
    if (!nome || !cep) {
      Alert.alert('Erro', 'Nome e CEP são obrigatórios!');
      return;
    }

    const novoEndereco = { id: Math.random().toString(), nome, cep };
    addEndereco(novoEndereco); // Adicionando o novo endereço ao contexto
    navigation.goBack(); // Voltando para a tela de Enderecos

    Alert.alert('Sucesso', 'Endereço adicionado com sucesso!');
    setNome('');
    setCep('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Novo Endereço</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do Endereço"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="CEP"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar Endereço</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NovoEndereco;
