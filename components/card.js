import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import About from '../components/about';
import Fields from '../components/fields';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <About info={props.about}/>
      <View style={styles.cardContent}>
        <Text style={styles.seeking}>Seeking {props.about.seeking}</Text>
        <Fields content={props.content}/>
        {props.pictures}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: '75%',
    backgroundColor: '#D0F1F1',
    padding: '5%',
    borderRadius: 15,
  },
  cardContent: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    maxHeight: '80%',
    backgroundColor: '#FFF',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
  },
  seeking: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  }
});
