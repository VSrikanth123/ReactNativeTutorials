/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

const App = () => {
  const [myList, setMylist] = useState([
    {id: 0, title: 'ReactNative'},
    {id: 1, title: 'ReactJS'},
    {id: 2, title: 'Node'},
    {id: 3, title: 'Java'},
    {id: 4, title: 'orcle'},
    {id: 5, title: '.Net'},
    {id: 6, title: 'ReactNative'},
    {id: 7, title: 'ReactJS'},
    {id: 8, title: 'Node'},
    {id: 9, title: 'Java'},
    {id: 10, title: 'orcle'},
    {id: 11, title: '.Net'},
    {id: 12, title: 'ReactNative'},
    {id: 13, title: 'ReactJS'},
    {id: 14, title: 'Node'},
    {id: 15, title: 'Java'},
    {id: 16, title: 'orcle'},
    {id: 17, title: '.Net'},
    {id: 18, title: 'ReactNative'},
    {id: 19, title: 'ReactJS'},
    {id: 20, title: 'Node'},
    {id: 21, title: 'Java'},
    {id: 22, title: 'orcle'},
    {id: 23, title: '.Net'},
  ]);

  const _renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          padding: 10,
          marginTop: 3,
          backgroundColor: 'lightgreen',
          alignItems: 'center',
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  //container componenit
  return (
    <View
      style={{
        backgroundColor: 'lightyellow',
      }}>
      <Text style={{fontSize: 50}}>List View</Text>
      {/* {myList.map(item => {
        return (
          <View
            style={{
              padding: 10,
              marginTop: 3,
              backgroundColor: 'lightgreen',
              alignItems: 'center',
            }}>
            <Text>{item.title}</Text>
          </View>
        );
      })} */}

      <FlatList data={myList} renderItem={_renderItem}></FlatList>
    </View>
  );
};
export default App;
