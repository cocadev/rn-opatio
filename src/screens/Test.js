import React from 'react';
 
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { Actions } from 'react-native-router-flux';

class Test extends React.PureComponent {
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };

  newNote = () => {
    this._menu.hide();
    Actions.addNotes()
  };

  newTask = () => {
    this._menu.hide();
    Actions.addTareas()
  };

  newCrop = () => {
    this._menu.hide();
    Actions.addCultivos()
  };
 
  showMenu = () => {
    this._menu.show();
  };
 
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: p(1) }}>
        <Menu
          ref={this.setMenuRef}
          button={<MaterialCommunityIcons onPress={this.showMenu} name={'dots-vertical'} size={p(30)} color={colors.DARK} />
        }
        >
          <MenuItem onPress={this.newNote}>New Note</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.newTask}>New Task</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.newCrop}>New Crop</MenuItem>
        </Menu>
      </View>
    );
  }
}
 
export default Test;