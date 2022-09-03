import { StyleSheet } from "react-native";

export const participantStyles = StyleSheet.create({
    container: {
        width: '100%',

        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: 10
    },

    participantText: {
        color: "#FFF",

        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        lineHeight: 56,
        backgroundColor: '#3a3b3c',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24
    },

    button: {
        height: 56,
        width: 56,
        backgroundColor: '#e23c44',
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center',

        padding: 0,
        marginLeft: 10
    }
});