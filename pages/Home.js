import styles from '../styles/Home.module.css'

export default function Home() {
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
    )
}