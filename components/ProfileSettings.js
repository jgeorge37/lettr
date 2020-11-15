import React, {useState } from 'react';
import { StyleSheet, View, SectionList, Switch, Modal, Image, TextInput, TouchableHighlight, Alter, Text } from 'react-native';
import UserPreferenceForm from '../components/UserPreferenceForm';

export default function ProfileSettings () {
    const [listingsIsEnabled, setListingsIsEnabled] = useState(false);
    const toggleListingSwitch = () => setListingsIsEnabled(previousState => !previousState);
    const [profilesIsEnabled, setProfilesIsEnabled] = useState(false);
    const toggleProfilesSwitch = () => setProfilesIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);
    
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
        <Text style={styles.text}>Looking For Listings<Switch style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={listingsIsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleListingSwitch}
          value={listingsIsEnabled}
        /></Text>
         <Text style={styles.text}>Looking For Profiles<Switch style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={profilesIsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleProfilesSwitch}
          value={profilesIsEnabled}
        /></Text>
                <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                {/* onSubmit={onSubmit}> */}
                {/* <UserPreferenceForm style={styles.modalText}> </UserPreferenceForm> */}
                <Text> Enter Listing Preferences: </Text>
                <TextInput borderColor='gray' placeholder="Move-in-date: Ex 01/01/2020" />
                <TextInput placeholder="Price Range: Ex 500-1000" />
                <TextInput placeholder="Age Preference: Ex 20-25" />
                <TextInput placeholder="Gender Preference: Ex Female/NA" />
                <TextInput placeholder="Gender Preference: Ex Female/NA" />
                {/* <DateInput /> */}


                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#235478" }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <Text style={styles.textStyle}>Submit</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Welcome! Enter Listing Preferences</Text>
      </TouchableHighlight>
        {/* <View><UserPreferenceForm/></View> */}
      </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        // backgroundColor: '#D0F1F1',
        backgroundColor: '#D0F1F1',
      },
    //   container: {
        
    //   flex: 1,
    // //   alignItems: "center",
    //     marginLeft: 30,
    //     marginRight: 30,
    // //   justifyContent: "center"'
    //     paddingTop: 90,
    // },
    switchtext: {
        fontSize: 25,
    },
    text: {
      borderRadius: 50,
        backgroundColor: '#D0F1F1',
        fontSize: 25,
        paddingBottom: 5,
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
      container: {
        flex: 1,
        // backgroundColor: '#235478',
        backgroundColor: '#D0F1F1',
        paddingTop: 60,
        paddingLeft: 4,
        // alignItems: 'center',
        // justifyContent: 'center',
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
      forgot:{
        color:"white",
        fontSize:11
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
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#57b481",
        borderRadius: 20,
        padding: 10,
        // marginTop: 100,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });