import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../types'; // Ajuste o caminho se necessário
import { StackNavigationProp } from '@react-navigation/stack'; // Importando StackNavigationProp
import { useEnderecos } from './enderecoscontext'; // Importando o hook do contexto
import styles from './styles';

type EnderecosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Enderecos'>;

const Enderecos = () => {
  const navigation = useNavigation<EnderecosScreenNavigationProp>(); // Agora o navigation tem o tipo correto
  const { enderecos, deleteEndereco } = useEnderecos(); // Acessando os endereços e a função de exclusão do contexto

  const handleEditarEndereco = (id: string) => {
    // Encontra o endereço baseado no id
    const endereco = enderecos.find((e) => e.id === id);
    if (endereco) {
      // Navega para a tela de AlterarEndereco, passando os parâmetros corretos
      navigation.navigate('AlterarEndereco', { 
        id: endereco.id,
        nome: endereco.nome,
        cep: endereco.cep
      });
    }
  };

  const handleExcluirEndereco = (id: string) => {
    Alert.alert(
      'Excluir Endereço',
      'Tem certeza que deseja excluir este endereço?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            deleteEndereco(id); // Função que deleta o endereço do contexto
            Alert.alert('Sucesso', 'Endereço excluído com sucesso!');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Lista de Endereços</Text>

      <FlatList
        data={enderecos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleEditarEndereco(item.id)}
            >
              <Text style={styles.itemText}>
                {item.nome} - {item.cep}
              </Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              {/* Botão Editar */}
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditarEndereco(item.id)}
              >
                <Text style={styles.editButtonText}>Editar</Text>
              </TouchableOpacity>

              {/* Botão Excluir */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleExcluirEndereco(item.id)}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NovoEndereco')}
      >
        <Text style={styles.addButtonText}>Adicionar Novo Endereço</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Enderecos;
