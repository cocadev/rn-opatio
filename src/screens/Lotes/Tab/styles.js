import {StyleSheet} from 'react-native';
import { colors } from '../../../common/colors';
import { p } from '../../../common/normalize';
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor:'#ddd',
        borderTopWidth:1,
        margin:0
    },
    
    active1: {
        width:'33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: colors.ORANGE,
        borderTopWidth: p(7),
        height: 54,
        padding:6,
    },
    active2: {
        width:'33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        padding:6,
        borderTopColor: colors.BLUE,
        borderTopWidth: p(7),
    },
    active3: {
        width:'33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        padding:6,
        borderTopColor: colors.GREEND,
        borderTopWidth: p(7),
    },

    nonactive: {
        width:'33.3%',
        height: 54,
        padding:6,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;