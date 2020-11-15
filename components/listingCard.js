import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Card from '../components/card';

export default function ListingCard(props) {

  console.log(props.pictures)

  const organizePictures = () => {
    return (
      <View style={styles.images}>
        {props.pictures.map((picSource, index) => <Image style={styles.listingImage} key={index} source={{uri: picSource}}/>)}
      </View>
    )
  }

  const prettyPictures = organizePictures();
  console.log(prettyPictures)

  return (
    <Card content={props.content} about={props.about} pictures={prettyPictures}/>
  );
}

const styles = StyleSheet.create({
  images: {
    overflowY: 'auto',
    flex:1,
    marginBottom: 5
  },
  listingImage: {
    width: 200,
    height: 200
  }
});
