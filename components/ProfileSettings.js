import React, {useState } from 'react';
import { StyleSheet, View, SectionList, Switch, Image, Text } from 'react-native';



export default function ProfileSettings () {
    const [listingsIsEnabled, setListingsIsEnabled] = useState(false);
    const toggleListingSwitch = () => setListingsIsEnabled(previousState => !previousState);
    const [profilesIsEnabled, setProfilesIsEnabled] = useState(false);
    const toggleProfilesSwitch = () => setProfilesIsEnabled(previousState => !previousState);
    
    return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg',
        }}/>
        <Text style={styles.text}>Name: Doge</Text>
        <Text style={styles.text}>Major: Dog Training</Text>
        <Text style={styles.text}>Age: 20 in dog years</Text>
        <Text style={styles.text}>Gender: Dog</Text>
        <Text style={styles.switchtext}>Looking For Listings<Switch style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={listingsIsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleListingSwitch}
          value={listingsIsEnabled}
        /></Text>
         <Text style={styles.switchtext}>Looking For Profiles<Switch style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={profilesIsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleProfilesSwitch}
          value={profilesIsEnabled}
        /></Text>
      </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        backgroundColor: '#D0F1F1',
      },
      container: {
        
      flex: 1,
    //   alignItems: "center",
        marginLeft: 30,
        marginRight: 30,
    //   justifyContent: "center"'
        paddingTop: 90,
    },
    switchtext: {
        fontSize: 25,
    },
    text: {
        backgroundColor: '#D0F1F1',
        fontSize: 25,
    },
    switch: {
        transform: [{ scaleX: .8 }, { scaleY: .8 }],
        // fontSize: 25,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#E9F3EF',
      },
  });