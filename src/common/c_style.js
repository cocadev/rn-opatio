import { StyleSheet, Dimensions } from 'react-native'
import { colors } from './colors'
import { p } from './normalize'

const height = Math.round(Dimensions.get('window').height);

const Cstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    input: {
        height: 40,
        marginVertical: p(6),
        marginTop: p(10),
        fontSize: p(17),
        borderBottomColor: '#707070',
        borderBottomWidth: 1
    },

    searchView: {
        backgroundColor: colors.GREY4,
        alignItems: 'center',
        flexDirection: 'row',
        height: p(55),
        marginTop: p(240)
    },
    searchInput: {
        flex: 1,
        marginHorizontal: p(26),
        paddingHorizontal: p(12),
        backgroundColor: colors.GREY5,
        borderRadius: p(12),
        fontSize: p(21),
        height: p(36),
        color: colors.GREY4,
        fontWeight: '700'
    },
    tab: {
        flexDirection: 'row',
        backgroundColor: colors.GREY3,
        height: p(60)
    },
    tabItem: {
        flex: 1,
        borderTopColor: colors.GREY3,
        borderTopWidth: p(8),
        backgroundColor: colors.GREY3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: p(243),
        height: p(172),
        padding: p(13),
        borderRadius: 5,
        borderColor: '#707070',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        opacity: 0.95,
        marginTop: 24,
    },
    modalContainer: {
        height: height + 100,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginTop: p(-90),
        paddingRight: p(30),
        alignItems: "flex-end",
        justifyContent: 'center'
    },
    
});

export default Cstyles;