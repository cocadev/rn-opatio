import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor:'#ddd',
        borderTopWidth:1,
        margin:0
    },
    
    active: {
        width:'20%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        padding:6,
    },

    nonactive: {
        width:'20%',
        height: 54,
        padding:6,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;