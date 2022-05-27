import { Butterfly } from 'phosphor-react-native';
import {  StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
  width: 60, 
  height: 60, 
  borderRadius: 30,
  backgroundColor: theme.colors.brand,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: 16,
  bottom: 16

  },
  modal: {
  backgroundColor: theme.colors.surface_primary,
  paddingBottom: 16
  },
  indicator: {
   backgroundColor: theme.colors.text_primary,
   width: 56,
   padding: 0
  }
});  