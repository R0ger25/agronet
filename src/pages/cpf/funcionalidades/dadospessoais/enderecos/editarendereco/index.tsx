import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEnderecos } from '../enderecoscontext'; // Importando o hook do contexto
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../../types'; // Ajuste o caminho se necessário
import styles from '../styles';

type AlterarEnderecoRouteProp = RouteProp<RootStackParamList, 'AlterarEndereco'>;

const AlterarEndereco = () => {
  const navigation = useNavigation();
  const route = useRoute<AlterarEnderecoRouteProp>();

  // Desestruturando os parâmetros com valores padrão caso não sejam passados
  const { id = '', nome = '', cep = '' } = route.params || {}; 

  const { addEndereco, updateEndereco } = useEnderecos(); // Funções para atualizar e adicionar endereço

  const [novoNome, setNovoNome] = useState(nome);
  const [novoCep, setNovoCep] = useState(cep);

  // Se os parâmetros não forem passados, isso indica que estamos criando um novo endereço
  useEffect(() => {
    if (!id) {
      // Caso não exista um id, estamos criando um novo endereço, então os campos estarão vazios ou com valores padrão
      setNovoNome('');
      setNovoCep('');
    }
  }, [id]);

  const handleSave = () => {
    if (!novoNome || !novoCep) {
      Alert.alert('Erro', 'Nome e CEP são obrigatórios!');
      return;
    }

    if (id) {
      // Atualizando o endereço existente
      const enderecoAtualizado = { id, nome: novoNome, cep: novoCep };
      updateEndereco(id, enderecoAtualizado); // Atualizando o endereço no contexto
      Alert.alert('Sucesso', 'Endereço atualizado com sucesso!');
    } else {
      // Criando um novo endereço
      const novoEndereco = { id: Date.now().toString(), nome: novoNome, cep: novoCep };
      addEndereco(novoEndereco); // Adicionando o novo endereço ao contexto
      Alert.alert('Sucesso', 'Novo endereço criado com sucesso!');
    }

    navigation.goBack(); // Voltando para a tela anterior
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{id ? 'Editar Endereço' : 'Novo Endereço'}</Text>

      <TextInput
        style={styles.input}
        value={novoNome}
        onChangeText={setNovoNome}
        placeholder="Nome do Endereço"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        value={novoCep}
        onChangeText={setNovoCep}
        placeholder="CEP"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>{id ? 'Salvar Endereço' : 'Criar Endereço'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlterarEndereco;
