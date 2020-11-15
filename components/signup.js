'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class SignUpScreen extends Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  submit() {
    // save to database then clear
    this.setState({username: ""})
    this.setState({password: ""})
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>Sign Up</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {this.submit(); navigation.navigate('SignIn')}}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default function(props) {
  const navigation = useNavigation();

  return (
    <SignUpScreen {...props} navigation={navigation} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#235478',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#57b481",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#347eb2",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    color:"white",
    textAlign: 'left',
    padding:10,
    borderRadius:25
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#57b481",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
