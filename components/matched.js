import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from "react-native";

export default function matched() {
  state = {
    modalVisible: true
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Button title="close" onPress={()=>{this.setModalVisible(!modalVisible);}} style={styles.closeButton}></Button>
              <Text style={styles.modalText}>It's a Match!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Send Message</Text>
              </TouchableHighlight>
             
            </View>
          </View>
        </Modal>

      </View>
    );
  }


const styles = StyleSheet.create({
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
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  closeButton: {
    color: "black",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

