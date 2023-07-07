/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const StateDemo = () => {
  const [myTitle, setMytitle] = useState('React Native');

  const ChangeTitle1 = () => {
    setMytitle('ReactJS');
  };

  const ChangeTitle2 = () => {
    setMytitle('React Native');
  };

  //presentational component
  const ShowTitle = props => {
    return <Text style={{fontSize: 30}}>{props.title}</Text>;
  };

  //container component
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightyellow',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 50}}>Title</Text>

      {/* <Text style={{fontSize: 50}}>{myTitle}</Text> */}

      <ShowTitle title="React Native" />

      <Button title="change1" onPress={ChangeTitle1}></Button>
      <Button title="change2" onPress={ChangeTitle2}></Button>
    </View>
  );
};
export default StateDemo;
