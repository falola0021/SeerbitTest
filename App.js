import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import Homepage from './src/screens/Homepage';
import BillPayment from './src/screens/BillPayment';
import SelectedBill from './src/screens/SelectedBill';
import ConfirmPayment from './src/screens/ConfirmPayment';

import AppLoading from 'expo-app-loading';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    SF_Pro_Display_Medium: require('./assets/fonts/SFPRODISPLAYMEDIUM.otf'),
    SF_Pro_Display_Regular: require('./assets/fonts/SFPRODISPLAYREGULAR.otf'),
    Helvetica_Neue_Medium: require('./assets/fonts/HelveticaNeueMed.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Homepage'
            options={{ headerShown: false }}
            component={Homepage}
          />
          <Stack.Screen
            name='BillPayment'
            options={{ headerShown: false }}
            component={BillPayment}
          />

          <Stack.Screen
            name='SelectedBill'
            options={{ headerShown: false }}
            component={SelectedBill}
          />

          <Stack.Screen
            name='ConfirmPayment'
            options={{ headerShown: false }}
            component={ConfirmPayment}
          />
        </Stack.Navigator>
        <FlashMessage position='bottom' />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
