import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) =>
      blogPost.id === navigation.getParam('id'));

  return (
      <View>
        <Text>{blogPost.title} - {blogPost.id}</Text>
        <Text>{blogPost.content}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  editButton: {
    marginRight: 5,
  },
});

const Header = ({ navigation }) => {
  return (
      <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('Edit', { id : navigation.getParam('id') })}
      >
        <EvilIcons name={'pencil'} size={30}/>
      </TouchableOpacity>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <Header navigation={navigation}/>
  }
};

export default ShowScreen;