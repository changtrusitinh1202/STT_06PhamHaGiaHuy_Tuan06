import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screen4a from './Screen/Screen4a';
import Screen4b from './Screen/Screen4b';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen4a'>
        <Stack.Screen
        name='Screen4a'
        component={Screen4a}
        options={{
         headerShown: false
        }}
        >   
        </Stack.Screen>
        <Stack.Screen
        name='Screen4b'
        component={Screen4b}
        options={{
         headerShown: false
        }}
        >   
        </Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
