import { StyleSheet } from 'react-native';
import { colors } from '../../res/colors';

export default StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    card: {
        borderColor: "#fff",
        height: 446,
        backgroundColor: "white",
        elevation: 20,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 48,
    },
    nameContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        textAlign: "center",
        fontSize: 16,
        backgroundColor: "transparent",
        fontWeight: 700,
        lineHeight: 20,
        marginBottom: 5,
        color: colors.grey,
    },
    origin: {
        textAlign: "left",
        fontSize: 8,
        fontWeight: 700,
        backgroundColor: "transparent",
        color: colors.lightGrey,
    },
    btnsContainer: {
        width: 154,
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    roundBtn: {
        height: 54,
        width: 54,
        borderRadius: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOpacity: 0.8,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    }
});