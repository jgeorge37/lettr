import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SwipeScreen from './components/swipe';
import SignInScreen from './components/signin';
import SignUpScreen from './components/signup';
import GlobalState from './components/globalstate';
import SignInContext from './components/context';

//temp for compile
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

//temp for compile
function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Message Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalState>
      <SignInContext.Consumer>
        {({signedin, togglesignin}) => (<NavigationContainer>
          {signedin ? ( //signed in, go to main app
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Profile') {
                    iconName = 'ios-person';
                  } else if (route.name === 'Swipe') {
                    iconName = 'ios-home';
                  } else if (route.name === 'Message') {
                    iconName = 'ios-chatbubbles';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
              >
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Swipe" component={SwipeScreen} />
                <Tab.Screen name="Message" component={MessageScreen} />
              </Tab.Navigator>
            ) : ( //not signed in, needs to sign in or sign up
              <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </Stack.Navigator>
            )
          }
          </NavigationContainer>
        )}
      </SignInContext.Consumer>
    </GlobalState>
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
