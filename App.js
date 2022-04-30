import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from './src/theme/main';

// Screens
import Habits from './src/screens/Habits';
import Stats from './src/screens/Stats';
import Settings from './src/screens/Settings';
import NewHabit from './src/screens/NewHabit';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigation for main pages
function TabPages() {
    return (
        <Tab.Navigator
            initialRouteName="Habits"
            labeled={true}
            activeColor={'#ffab91'}
            inactiveColor={'white'}
            barStyle={{ backgroundColor: '#5c6bc0' }}
        >
            <Tab.Screen
                name="Habits"
                component={Habits}
                options={{
                    tabBarLabel: 'Habits',
                    tabBarAccessibilityLabel: 'Habits',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="book" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarLabel: 'Stats',
                    tabBarAccessibilityLabel: 'Stats',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="barschart" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarAccessibilityLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <StatusBar style="light" backgroundColor="#26418f" />
                <Stack.Navigator>
                    <Stack.Screen
                        name="TabPages"
                        component={TabPages}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="NewHabit"
                        component={NewHabit}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}
