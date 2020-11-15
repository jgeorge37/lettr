import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SwipeScreen from './components/swipe';
import SignInScreen from './components/signin';
import SignUpScreen from './components/signup';
import ProfileSettings from './components/ProfileSettings';
import Messaging from './components/messaging'
import GlobalState from './components/globalstate';
import SignInContext from './components/context';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const matches = ['The dawg', 'The doge'];

function ProfileScreen({ navigation }) {
  return (
      <ProfileSettings/>
  );
}

function MessageHomeScreen({ navigation }) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Message a match!</Text>
    </View>
  )
}

function MessageScreen({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MessageHomeScreen} />
        {matches.map((match, index) =>
          <Drawer.Screen name={match} component={Messaging} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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
