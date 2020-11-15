import React from 'react';
import { StyleSheet } from 'react-native';
import Card from '../components/card';

export default function ProfileCard(props) {
  return (
    <Card content={props.content} about={props.about}/>
  );
}

const styles = StyleSheet.create({

});
