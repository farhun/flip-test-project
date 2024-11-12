import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionListPage from '../screens/TransactionListPage';
import DetailTransactionPage from '../screens/DetailTransactionPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionListPage">
        <Stack.Screen name="TransactionListPage" options={{headerShown: false }}> 
          {(props) => <TransactionListPage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DetailTransactionPage" options={{headerShown: false }}>
          {(props) => <DetailTransactionPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
