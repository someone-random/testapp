import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,TouchableHighlight,Alert } from 'react-native';


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.bigBox}>
        <View style={styles.box}>
          <TouchableHighlight style={styles.button} onPress={() => {Alert.alert('Hello world')}}>
            <View>
              <Text style={styles.text}>1</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.button}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>6</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.button}>
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>9</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    margin:10,
    shadowColor:'lightblue',
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 5 },
  },
  text: {
    color:'white'
  },
  box: {
    display: 'flex',
    flex:1,
    flexDirection: 'row',
  },
  bigBox: {
    flexDirection: 'column',
    display:'flex',
    flex:1,
    paddingTop:50,
    paddingBottom:50
  },
})
