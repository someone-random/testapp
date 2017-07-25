import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,TouchableHighlight,Alert } from 'react-native';


export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = ({
      a:[3],
      b:[3],
      red: []
    })
    this.handleClick=this.handleClick.bind(this)
    console.log(this.state.red)
    for (var i=0;i<3;i++){
      this.state.a[i]=i+1
      this.state.b[i]=i+4
      this.state.red[i]=false
    }
  }
  handleClick(key){
    console.log(key)
    if(this.state.red[key-4] === true){
      this.state.red[key-4] = false
    } else {
      this.state.red[key-4] = true
    }
    console.log(this.state.red[0])
    console.log(this.state.red[1])
    console.log(this.state.red[2])
  }
  render(){
    console.log(this.state.red)
    return (
      <View style={styles.bigBox}>
        <View style={styles.box}>
        {this.state.a.map((number) =>(
          <TouchableHighlight style={styles.button} onPress={() => {Alert.alert('Hello world')}} key={number}>
            <View>
              <Text style={styles.text}>{number}</Text>
            </View>
          </TouchableHighlight>
        )
      )}
        </View>
        <View style={styles.box}>
        {this.state.b.map((number) => (
          <TouchableHighlight style={styles.button} onPress={() => {this.handleClick(number)}} key={number}>
            <View>
              <Text style={styles.text}>{number}</Text>
              {console.log(number)}
            </View>
          </TouchableHighlight>
        ))}
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
  red:{
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    margin:10,
    shadowColor:'red',
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 5 },
  }
})
