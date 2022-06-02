import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
   width: 100,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 10,
   borderRadius: 8,
   marginHorizontal: 11,
   backgroundColor: theme.colors.surface_secondary

  },
  image: {
 width: 40,
 height: 40
  },
  title:{
      fontSize: 14,
      marginTop: 10,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_primary
  }
});