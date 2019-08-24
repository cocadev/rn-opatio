import React from 'react';
 
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { p } from '../common/normalize';
import { colors } from '../common/colors';

class Test extends React.PureComponent {
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu
          ref={this.setMenuRef}
          button={<MaterialCommunityIcons onPress={this.showMenu} name={'dots-vertical'} size={p(30)} color={colors.DARK} />
        }
        >
          <MenuItem onPress={this.hideMenu}>New Note</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>New Task</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>New Crop</MenuItem>
        </Menu>
      </View>
    );
  }
}
 
export default Test;