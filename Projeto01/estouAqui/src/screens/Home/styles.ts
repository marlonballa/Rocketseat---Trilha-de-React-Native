//Estamos criando uma folha de estilos única, que será utilizada pelo componente Home quando ele for renderizado.
//Sempre começamos importando o elemento da biblioteca e neste caso, como é uma folha de estilo, vamos importar o StyleSheet
import { StyleSheet } from 'react-native'; 

//Equivalente a fazer um arquivo de estilos css
//Escolhemos o tipo de elemento e que vamos criá-lo
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '15%',
      backgroundColor: '#18191a',
    },
    nameEvent: {
      fontSize:24,
      fontWeight: 'bold',
      color: '#FFF'
    },

    dateOfEvent: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#b0b3b8',
    }, 


    newParticipant: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20
    }, 

    input: {
      color: '#FFF',
      borderRadius: 5,
      backgroundColor: '#3a3b3c',
      
      flex: 1,
      padding: 10,
      lineHeight: 56
  },

    buttonText: {
      color: '#FFF',
      fontSize: 24
    }, 

    button: {
      height: 56,
      width: 56,
      backgroundColor: '#31CF67',
      borderRadius: 5,

      alignItems: 'center',
      justifyContent: 'center',

      padding: 0,
      marginLeft: 10
    }
  })

  //Para que essa folha de estilos possa ser utilizada pelo elemento, devemos exportá-la. Basta adicionarmos a palavra 'export' em sua criação. 