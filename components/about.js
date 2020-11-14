import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function About(props) {
  return (
    <View style={styles.about}>
      <View style={styles.topRow}>
        <View style={{flex:1,justifyContent:'center'}}>
          <Text style={styles.aboutName}>{props.info.fname}</Text>
          <Text>Age: {props.info.age}</Text>
          <Text>Gender: {props.info.gender}</Text>
        </View>
        <View style={{flex:1}}>
          <Image
            style={styles.aboutPfp}
            source={{uri: props.info.pfp}}
          />
        </View>
      </View>
      {props.info.bio && <Text style={styles.aboutBio}>{props.info.bio}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#FFF',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
  },
  topRow: {
    flexDirection: 'row'
  },
  aboutPfp: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#E3E3E3',
    alignSelf: 'flex-end'
  },
  aboutName: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'flex-start'
  },
  aboutBio: {
    marginTop: 5
  }
});
