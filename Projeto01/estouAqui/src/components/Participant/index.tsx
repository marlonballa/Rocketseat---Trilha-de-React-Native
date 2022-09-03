import {View, Text, TouchableOpacity} from 'react-native';
import {participantStyles} from './participantStyles';

//Cria um objeto para a Props que conterá os tipos que serão utilizados 
type Props = {
    nameUser: string,
    onRemove: () => void
}

export function Participant({nameUser , onRemove} : Props) {

    return (
        <View style={participantStyles.container}>
            <Text style={participantStyles.participantText}>
                {nameUser}
            </Text>
            <TouchableOpacity style={participantStyles.button} onPress={onRemove}>
                <Text style={participantStyles.buttonText}>
                -
                </Text>
          </TouchableOpacity>
        </View>
    )
}