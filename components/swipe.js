'use strict';

import React, {Component} from 'react';
<<<<<<< HEAD
import { Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import ListingCard from '../components/listingCard'
=======
import { Text, View, Dimensions, Animated, PanResponder } from 'react-native';
import ProfileCard from '../components/profileCard'
>>>>>>> 705469873bde1049583fd2d09d3ee0fe7f474e55

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SwipeScreen extends Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.users = [
      { about: {
          pfp: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg',
          fname: 'doge',
          gender: 'male',
          seeking: 'housing',
          age: '420',
          bio: 'doge'
        },
        content: {
          pet_friendly: 'required',
          budget: '$420-$420'
        },
        pictures: [
          'https://media.architecturaldigest.com/photos/5e669f51664e8c00083cbcec/master/w_1600%2Cc_limit/AD0420_JOHNSON_6.jpg',
          'https://media.architecturaldigest.com/photos/5e669f4a3ba7b50008368c6f/master/w_4350,h_3263,c_limit/AD0420_JOHNSON_1.jpg',
          'https://www.fancypantshomes.com/wp-content/uploads/2020/03/dakota-johnson-home-office.jpg'
        ]
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

        <ListingCard content={item.content} about={item.about} pictures={item.pictures}/>

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

        <ListingCard content={item.content} about={item.about} pictures={item.pictures}/>

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
