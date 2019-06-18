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

    containerView: {
        flex: 1,
        paddingVertical: 12,
        backgroundColor: colors.WHITE
    },
    timeDot: {
        position: 'absolute',
        zIndex:1,
        bottom: p(33),
        width: 7,
        height: 7,
        borderColor: colors.WHITE,
        borderWidth: 1,
        backgroundColor: colors.ORANGE,
        borderRadius: 3.5
    },
    dot: {
        backgroundColor: 'transparent',
        flex: 1,
        width: 20,
        marginLeft: 2.2,
        borderStyle: 'dashed',
        borderLeftColor: colors.TEXT,
        borderLeftWidth: 1
    },
    img: {
        width: p(20),
        height: p(20),
        marginRight: p(16)
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.ORANGE,
        marginVertical: p(6),
        borderRadius: 7,
        padding: p(22),
        elevation:1,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: p(12),
        color: '#707070',
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: p(5),
        width: p(146),
        height: p(32),
        marginHorizontal: p(10)
    }

});

export default styles;