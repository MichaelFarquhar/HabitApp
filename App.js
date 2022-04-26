import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/screens/theme/main';

// Screens
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Home Page' }}
                    />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}
