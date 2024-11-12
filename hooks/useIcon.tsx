import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import { GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

type IconType = 'Ionicons' | 'MaterialIcons' | 'FontAwesome6' | 'Entypo' | 'MaterialCommunityIcons';

interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle | TextStyle;
}

export const useIcon = ({
  type,
  name,
  size = 24,
  color = 'black',
  onPress,
  style,
}: IconProps) => {
  switch (type) {
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} onPress={onPress} style={style} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} onPress={onPress} style={style} />;
    case 'FontAwesome6':
      return <FontAwesome6 name={name} size={size} color={color} onPress={onPress} style={style} />;
    case 'Entypo':
      return <Entypo name={name} size={size} color={color} onPress={onPress} style={style} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} onPress={onPress} style={style} />;
    default:
      return null;
  }
};