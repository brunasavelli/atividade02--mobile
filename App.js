import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.title}>
      <Text style={{ fontSize: 35, textAlign: 'center' }}>Persistência e Navegação</Text>

      <TextInput style={styles.input}>
        <Text style={{ fontSize: 12, color: '#828285' }}>Digite algo</Text>
      </TextInput>

      <Text style={{ color: 'red', fontSize: 18, margin: 15 }}>Sem persistência: Nenhum texto salvo</Text>
      <Text style={{ color: 'green', fontSize: 18, margin: 15 }}>Texto persistido: Nenhum texto salvo</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={{color: 'white', fontSize: 18}}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={{color: 'white', fontSize: 18}}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={{color: 'white', fontSize: 18}}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 300,
    height: 40,
    borderColor: '#828285',
    borderWidth: 1,
    borderRadius: 5,
  },

  botao: {
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
