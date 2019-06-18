import {StyleSheet} from 'react-native';
import { colors } from '../../common/colors';
import { p } from '../../common/normalize';

export const customStyles = StyleSheet.create({
    textinput: {
        width: p(260),
        height: p(50),
        paddingLeft: p(48),
        fontSize: p(16),
        borderColor: colors.GREY8,
        borderWidth: 1,
        borderRadius: p(25)
    },
    searchView: {
        position: 'absolute', 
        top: p(55), 
        left: p(60)
    },
    searchIcon: {
        top: p(35), 
        left: p(22), 
        width: p(20), 
        height: p(19)
    }
});