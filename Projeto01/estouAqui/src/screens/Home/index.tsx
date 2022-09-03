//O Arquivo .tsx é o responsável pela estrutura do componente. 

//Para utilizar elementos, precisamos importar eles na biblioteca. 
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
//Importanto a folha de estilos
import { styles } from './styles'
//Importando o componente Participante
import { Participant } from '../../components/Participant';

//A função App é a padrão para a inicialização da aplicação.
export default function Home() {
  //Toda função possui um retorno. Aqui vamos retornar os elementos que queremos que apareçam na tela.
  //Todas as funções devem ser criadas dentro do escopo do componente.
  function handleParticipantAdd() {
    console.log("Clicou em adicionar")
  }

  function handleParticipantRemove(nameUser: string) {
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
              keyboardType="numeric"
          />
          {/*Criando um botão. *Elementos de texto devem sempre estar encapsulados por Text*/}
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <Participant nameUser="Rodrigo faro" onRemove={() => handleParticipantRemove("Marlon")} />
          {/*Criamos uma propriedade que usará uma function que está neste arquivo, mas será disparada quando o usuário clicar no componente (que está em outro lugar)*/}
    </View>
    //Quando o retorno for mais do que um elemento, o conteúdo deve estar dentro de uma View (equivalente a uma div).
    // <> </> Fragement: utilizado para embrulhar elementos. 
    //Os elementos devem sempre começar com letra maiúsculas. 
    //Para Criar componentes o arquivo deve ser do tipo .tsx
  )
}