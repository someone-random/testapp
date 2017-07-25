import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class table extends Component {
  render() {
    return (
      <View style={styles.bigBox}>
        <View style={styles.box}>
          <View style={styles.button}>
            <Text>1</Text>
          </View>
          <View style={styles.button}>
            <Text>2</Text>
          </View>
          <View style={styles.button}>
            <Text>3</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.button}>
            <Text>4</Text>
          </View>
          <View style={styles.button}>
            <Text>5</Text>
          </View>
          <View style={styles.button}>
            <Text>6</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.button}>
            <Text>7</Text>
          </View>
          <View style={styles.button}>
            <Text>8</Text>
          </View>
          <View style={styles.button}>
            <Text>9</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default table
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    margin:10,
    shadowColor:'lightblue',
    shadowOffset: { width: 10, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 1,
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
