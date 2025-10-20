import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NoteList({ notes, onDeleteNote }) {
  const renderItem = ({ item }) => (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item.text}</Text>
      <TouchableOpacity onPress={() => onDeleteNote(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#ff4757" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No notes yet. Add one!</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dfe6e9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    color: '#2f3640',
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});
