import React from 'react';
import { StyleSheet, View, SectionList, Text } from 'react-native';
import Card from '../components/card';

export default function ProfileCard(props) {
  const organizeContent = () => {
    const fields = []
    for (const key of Object.keys(props.content)) {
      fields.push({title: key.replace(/_/g, ' '), data: [props.content[key]]})
    }
    return (
      <View style={styles.listContainer}>
        <SectionList
          sections={fields}
          renderItem={({item}) => <Text style={styles.sectionItem}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item,index) => index}
        />
      </View>
    )
  }

  const pretty = organizeContent()

  return (
    <Card content={pretty} about={props.about}/>
  );
}

const styles = StyleSheet.create({

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#E9F3EF',
  },
  sectionItem: {
    padding: 10,
    fontSize: 14,
    height: 44,
  }
});
