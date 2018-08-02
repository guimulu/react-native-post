import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import Post from './components/Post';

const fullWidth = Dimensions.get('window').width;

const contentPost = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum accumsan sapien, non tempus orci pharetra in. Donec elementum scelerisque nisi non pretium. Aliquam semper, quam quis convallis rhoncus, urna libero vestibulum mauris, non viverra libero lacus sed massa. Fusce non tincidunt nulla.';

export default class App extends Component {
  state = {
    posts: [
      {
        key: 0,
        header: 'Aprendendo React Native',
        author: 'Guilherme Muller',
        contentPost: contentPost,
      },
      {
        key: 2,
        header: 'Novo post react native',
        author: 'Guilherme Muller',
        contentPost: contentPost,
      },
      {
        key: 2,
        header: 'Novo post aplicativo',
        author: 'Guilherme Muller',
        contentPost: contentPost,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>
        <ScrollView>
          { this.state.posts.map(post => (
             <Post key={post.key} header={post.header} author={post.author} contentPost={post.contentPost} />
          )) }
        </ScrollView>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: fullWidth,
    height: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333333',
  },
});
