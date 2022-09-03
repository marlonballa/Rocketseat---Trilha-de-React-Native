//Como criamos um elemento externo, devemos realizar sua importação para dentro deste arquivo. Pois este arquivo será o responsável por renderizar os conteúdos na tela. 
import Home from './src/screens/Home';
//Importando componentes do React Native
import { StatusBar } from 'react-native';
//Único momento que usaremos a exportação default, pois é a inicialização do aplicação. 
export default function App() {
    return (
        <>
        {/**Podemos estilizar a StatusBar (barra de status com icones que apresentam informações e ficam na parte superior da aplicação)*/}
            <StatusBar
                barStyle={'light-content'}
                backgroundColor="transparent"
                translucent
            />
            <Home />
        </>
    )
}

