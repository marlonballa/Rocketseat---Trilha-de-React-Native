//O Arquivo .tsx é o responsável pela estrutura do componente. 

//Para utilizar elementos, precisamos importar eles na biblioteca. 
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
//Importanto a folha de estilos
import { styles } from './styles'
//Importando o componente Participante
import { Participant } from '../../components/Participant';

//A função App é a padrão para a inicialização
export default function App() {
//Responsável por armazenar os participantes
const participants = ["Marlon", "Ana Laura", "Marcelle", "Sandra", "Sebastião", "Welinton", "Paulo", "Camila", "Itaide Balla", "Jesus Balla", "Marcelo", "Leandro", "Reginaldo", "Cislene", "Clara", "Toquinho", "Estéfano"]

  //Toda função possui um retorno. Aqui vamos retornar os elementos que queremos que apareçam na tela.
  //Todas as funções devem ser criadas dentro do escopo do componente.
  function handleParticipantAdd() {
    if(participants.includes("Marlon")) {
      return Alert.alert("Eita, eita, eita!", "Já existe um participante na lista com este nome")
      /**Ao adicionarmos o return, ele para a execução da função */
    }
  }

  function handleParticipantRemove(nameUser: string) {
    Alert.alert("1,2,3... Já era!", `Deseja mesmo remover ${nameUser}?`, [
      {
        text: "Quero",
        onPress: () => Alert.alert("Esse já era!")
      }, 
      {
        text: "Pensei melhor",
        style: "cancel"
      }
    ])
    console.log(`Clicou em remover o participante: ${nameUser}`)
  }

  return (
    //Estilização por StyleSheet
    <View style={styles.container}>
        <Text style={styles.nameEvent}>
          Aulão de React Native
        </Text>
        <Text style={styles.dateOfEvent}>
          10 de Setembro de 2022
        </Text>
        <View style={styles.newParticipant}>
          <TextInput 
              style={styles.input}
              placeholder="Digite"
              placeholderTextColor="#b0b3b8"
          />
          {/*Criando um botão. *Elementos de texto devem sempre estar encapsulados por Text*/}
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        {/**A ScrollView permite a rolagem dentro dela e o atributo showsVerticalScrollIndicator ativa ou desativa a visualização da barra de rolagem. 
         * Uma alternativa para visualizar listas é o FlatList
         * Principal diferença entre as duas:
         * A ScrollView carrega todos os componentes que irão compor a lista, enquanto a FlatList carrega apenas os componentes que estão visíveis na tela. 
         * Ou seja, a FlatList perfoma muito mais do que a ScrollView e por isso é indicada para trabalhar com uma grande quantidade de dados. Afinal, carregar apenas o essencial deixa a aplicação mais leve. 
         */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            /**Quando utilizamos uma estrutura de repetição para gerar vvários componentes,devemos utilizar uma chave para que o React entenda que cada elemento é único. Utilizamos a propriedade Key para fazer isso.*/
            participants.map(participant => (
              <Participant
                key={participant}
                nameUser={participant}
                onRemove={() => handleParticipantRemove(participant)} />
              /*Criamos uma propriedade que usará uma function que está neste arquivo, mas será disparada quando o usuário clicar no componente (que está em outro lugar)*/
            ))
          }
      </ScrollView>
    </View>
    //Quando o retorno for mais do que um elemento, o conteúdo deve estar dentro de uma View (equivalente a uma div).
    // <> </> Fragement: utilizado para embrulhar elementos. 
    //Os elementos devem sempre começar com letra maiúsculas. 
    //Para Criar componentes o arquivo deve ser do tipo .tsx
  )
}