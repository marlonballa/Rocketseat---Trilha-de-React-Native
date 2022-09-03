import {View, Text, TouchableOpacity} from 'react-native';
import {participantStyles} from './participantStyles';

export function Participant() {

    return (
        <View style={participantStyles.container}>
            <Text style={participantStyles.participantText}>Marlon Balla</Text>
            <TouchableOpacity style={participantStyles.button}>
                <Text style={participantStyles.buttonText}>
                -
                </Text>
          </TouchableOpacity>
        </View>
    )
}