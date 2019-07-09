import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { p } from './normalize';

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
    
});

export default Cstyles;