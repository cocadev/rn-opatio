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
    
});

export default Cstyles;