import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, FlatList, Button, TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost} = useContext(Context);

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

