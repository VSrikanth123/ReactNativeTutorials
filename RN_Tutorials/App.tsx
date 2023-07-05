import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [counter, setCounter] = useState(40);
  const [disableButton, setDisableButton] = useState(false);

  const onClickButton = () => {
    let currentCounter = counter;

    setCounter(currentCounter + 1);
    if (currentCounter > 50) setDisableButton(true);
    else setDisableButton(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{counter}</Text>

      <Button
        title="Click Me"
        color="#841584"
        onPress={onClickButton}
        disabled={false}></Button>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          padding: 50,
          margin: 20,
          backgroundColor: '#DDDDDD',
        }}
        onPress={onClickButton}
        activeOpacity={0.5}>
        <Text style={styles.bigText}>Click Me</Text>
      </TouchableOpacity>

      <Pressable
        style={{
          alignItems: 'center',
          padding: 20,
          margin: 20,
          backgroundColor: 'green',
        }}
        onLongPress={onClickButton}
        delayLongPress={1000}>
        <Text style={styles.bigText}>Press Me</Text>
      </Pressable>

      {/* <Text style={styles.header}>Hello React Native</Text>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          welcome to <Text style={styles.bigText}>ReactNative </Text>
          <Text style={styles.greenText}> Tutorial</Text>
        </Text>
      </View> */}
      {/* <View style={styles.square}>
        <View style={styles.innerSquare}></View>
      </View> */}
      {/* <View style={styles.smallSqare}></View>
      <View style={styles.blueSquare}></View>
      <View style={styles.redSquare}></View> */}

      {/* <View style={[styles.regularSquare, {backgroundColor: 'crimson'}]}></View>
      <View
        style={[
          styles.regularSquare,
          {
            backgroundColor: 'yellow',
            position: 'absolute',
            top: 40,
            left: 40,
            zIndex: 3,
          },
        ]}></View>

      <View
        style={[
          styles.regularSquare,
          {
            backgroundColor: 'midnightblue',
            position: 'absolute',
            top: 80,
            left: 80,
            zIndex: 2,
          },
        ]}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    // marginTop: 30,
    padding: 20,
    backgroundColor: 'pink',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // padding: 30,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  regularSquare: {
    width: 100,
    height: 60,
  },
  header: {
    fontSize: 30,
    backgroundColor: 'green',
    color: 'yellow',
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 10,
  },
  bigText: {
    fontSize: 25,
  },
  greenText: {
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderWidth: 25,
    borderColor: 'maroon',
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderBottomColor: 'gray',
    padding: 50,
    paddingTop: 5,
  },
  smallSqare: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
  },
  innerSquare: {
    flex: 1,
    backgroundColor: 'black',
    width: 50,
    height: 50,
  },
  blueSquare: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
  redSquare: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  blackSquare: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
  },
});

export default App;
