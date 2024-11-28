import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook para navegação
import styles from './styles';

const AlterarSenha = () => {
  const navigation = useNavigation(); // Hook que fornece acesso ao objeto de navegação
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleChangePassword = () => {
    if (novaSenha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Lógica para alterar a senha (envio para API, por exemplo)
    alert('Senha alterada com sucesso!');
    navigation.goBack(); // Vai voltar para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar Senha</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Senha Atual"
          secureTextEntry
          value={senhaAtual}
          onChangeText={setSenhaAtual}
        />
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        <Button title="Alterar Senha" onPress={handleChangePassword} />
      </View>
    </View>
  );
};

export default AlterarSenha;
