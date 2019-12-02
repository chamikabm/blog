import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
      <View>
        <Text style={styles.label}>Edit Title :</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
        />
        <Text  style={styles.label}>Edit Content :</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={setContent}
        />
        <Button
            title={'Update Blog Post'}
            onPress={() => addBlogPost(title, content, () => navigation.navigate('Index'))}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditScreen;
