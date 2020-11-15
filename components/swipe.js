'use strict';

import React, {Component} from 'react';
import { Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SwipeScreen extends Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.users = [ //TEMP USERS
      {
        id: 1,
        name: "never",
        age: "4",
        picture: require('../testdata/user1.jpg')
      },
      {
        id: 2,
        name: "gonna",
        age: "2",
        picture: require('../testdata/user2.jpg')
      },
      {
        id: 3,
        name: "give",
        age: "0",
        picture: require('../testdata/user3.PNG')
      },
      {
        id: 4,
        name: "you",
        age: "4",
        picture: require('../testdata/user4.PNG')
      },
      {
        id: 5,
        name: "up",
        age: "2",
        picture: require('../testdata/room1.jpeg')
      }
    ]
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }

  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) { //swiped right
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) { //swiped left
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else { //did not successfully swipe
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderTop = (item) => {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
          <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>YAH</Text>
        </Animated.View>

        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
          <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NAH</Text>
        </Animated.View>

        <Image
          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
          source={item.picture} />

      </Animated.View>
    )
  }

  renderBelow = (item) => {
    return (
      <Animated.View
        key={item.id} style={[{
          opacity: this.nextCardOpacity,
          transform: [{ scale: this.nextCardScale }],
          height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
        }]}>
        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
          <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>YAH</Text>

        </Animated.View>

        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
          <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NAH</Text>

        </Animated.View>

        <Image
          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
          source={item.picture} />

      </Animated.View>
    )
  }

  renderUsers = () => {

    return this.users.map((item, i) => {

      if (i < this.state.currentIndex) { //we already swiped this card away
        return null
      }
      else if (i == this.state.currentIndex) { //the current card
        return this.renderTop(item)
      } else { //cards below current card
        return this.renderBelow(item)
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

export default SwipeScreen;
