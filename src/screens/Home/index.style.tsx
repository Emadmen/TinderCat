import { StyleSheet } from 'react-native';
import { colors } from '../../res/colors';

export default StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    swiperContainer: {
        width: '100%',
        height: 580,
        backgroundColor: colors.white
    },
    card: {
        borderColor: colors.white,
        height: 446,
        backgroundColor: colors.white,
        elevation: 20,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    swiper: {
        height: 520
    },
    image: {
        borderRadius: 16,
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.white,
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
        backgroundColor: colors.white
    },
    roundBtn: {
        height: 60,
        width: 60,
        borderRadius: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        elevation: 8,
        shadowOpacity: 8.8,
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 10 },
        borderWidth: .4,
        borderColor: colors.lightGrey,
    }
});