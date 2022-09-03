//Como criamos um elemento externo, devemos realizar sua importação para dentro deste arquivo. Pois este arquivo será o responsável por renderizar os conteúdos na tela. 

import Home from './src/screens/Home';


//Único momento que usaremos a exportação default, pois é a inicialização do aplicação. 
export default function App() {
    return (
        <Home />
    )
}

