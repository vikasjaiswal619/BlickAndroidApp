import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {secondarColor} from '../Constants/Theme';

const HeaderComponent = (props: any): JSX.Element => {
  const openDrawer = (): void => {
    props.navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" color="#fff" size={25} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    height: 55,
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: secondarColor,
    padding: 10,
    paddingLeft: 20,
    elevation: 10,
  },
  headerText: {
    fontSize: 22,
    marginLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
