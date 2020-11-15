import React, {useState} from 'react';
import { StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import Card from '../components/card';



export default function ListingCard(props) {

  const [scrollHeight, setScrollHeight] = useState(200)

  console.log(props.pictures)

  const organizePictures = () => {
    return (
      <ScrollView style={{height: scrollHeight}} onContentSizeChange={(w, h) => setScrollHeight(h)}>
          {props.pictures.map((picSource, index) =>
            <TouchableWithoutFeedback>
            <Image style={styles.listingImage} key={index} source={{uri: picSource}}/>
              </TouchableWithoutFeedback>
          )}
      </ScrollView>
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
    flex:1,
    marginBottom: 5
  },
  listingImage: {
    width: 300,
    height: 300
  }
});
