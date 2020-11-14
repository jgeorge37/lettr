import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import About from '../components/about';

export default function Card(props) {
  console.log(props.content)
  return (
    <View style={styles.card}>
      <About info={props.about}/>
      <View style={styles.cardContent}>
        <Text style={styles.seeking}>Seeking {props.about.seeking}</Text>
        {props.content}
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
    borderRadius: 15
  },
  cardContent: {
    marginTop: 10,
    width: '100%',
    minHeight: 100,
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
