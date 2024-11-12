import React from 'react';
import { StatusBar, View, Platform, StyleSheet } from 'react-native';
import { Colors } from '../themes/Colors';

interface CustomStatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = Colors.white,
  barStyle = 'dark-content',
}) => {
  return (
    <View style={[styles.statusBar, { backgroundColor: Platform.OS === 'android' ? backgroundColor : undefined }]}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : barStyle}
        backgroundColor={Platform.OS === 'android' ? backgroundColor : 'transparent'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'android' ? null : 0,
  },
});

export default CustomStatusBar;