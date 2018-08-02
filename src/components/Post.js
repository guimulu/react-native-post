import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  author: {
    color: '#999999',
    fontSize: 14,
  },
  authorBox: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  header: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentPost: {
    color: '#666666',
  },
});

const Post = ({ header, author, contentPost }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.header}>
        { header }
      </Text>
    </View>
    <View style={styles.authorBox}>
      <Text style={styles.author}>
        { author }
      </Text>
    </View>
    <View>
      <Text style={styles.contentPost}>
        { contentPost }
      </Text>
    </View>
  </View>
);

export default Post;
