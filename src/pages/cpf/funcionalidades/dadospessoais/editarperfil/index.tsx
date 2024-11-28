import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const EditarPerfil = () => {
  const navigation = useNavigation(); // Hook para navegação
  const [nome, setNome] = useState('Renan');
  const [cpf, setCpf] = useState('55*******72');
  const [telefone, setTelefone] = useState('(28)9999-9999');

  const handleSave = () => {
    // Lógica para salvar as alterações (por exemplo, enviar para API)
    alert('Alterações salvas com sucesso!');
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome Completo"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="CPF"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        placeholderTextColor="#ccc"
      />
      
      <Button title="Salvar Alterações" onPress={handleSave} color="#1db954" />

    </View>
  );
};

export default EditarPerfil;
