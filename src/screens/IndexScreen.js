import React, { useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  // useEffect is used to run the code only one time when a component is
  // first rendered. [] array indicate that it should run only a one time.
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // If we return function from the `useEffect` hook, it will only be invoked
    // if the current screen (i.e IndexScreen) is every completely stop showing. (i.e unmounted)
    return () => {
      listener.remove()
    }
  }, []);


  return (
      <View>
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                    onPress={
                      () => navigation.navigate('Show', { id: item.id })
                    }
                >
                  <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity
                        onPress={() => deleteBlogPost(item.id)}
                    >
                      <Feather style={styles.icon} name={'trash'}/>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
        />
      </View>
  );
};

const Header = ({ navigation }) => {
  return (
      <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('Create')}
      >
        <Feather name={'plus'} size={30}/>
      </TouchableOpacity>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <Header navigation={navigation}/>
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  createButton: {
    marginRight: 5,
  },
});

export default IndexScreen;

