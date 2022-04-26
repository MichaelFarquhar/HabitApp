import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from './src/screens/theme/main';

// Screens
import Home from './src/screens/Home';
import Stats from './src/screens/Stats';
import Settings from './src/screens/Settings';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Tab.Navigator
                    initialRouteName="Home"
                    labeled={true}
                    activeColor={'#ffab91'}
                    inactiveColor={'white'}
                    barStyle={{ backgroundColor: '#5c6bc0' }}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
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
            </PaperProvider>
        </NavigationContainer>
    );
}
