import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItems'
import chatRooms from '../data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={chatRooms[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
