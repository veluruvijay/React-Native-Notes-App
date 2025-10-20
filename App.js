import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes) setNotes(JSON.parse(savedNotes));
    } catch (error) {
      console.error('Failed to load notes', error);
    }
  };

  const saveNotes = async (newNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    } catch (error) {
      console.error('Failed to save notes', error);
    }
  };

  const addNote = (noteText) => {
    if (!noteText.trim()) {
      Alert.alert('Empty note', 'Please type something');
      return;
    }
    const newNotes = [...notes, { id: Date.now().toString(), text: noteText }];
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Notes App</Text>
      <NoteInput onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 20,
    textAlign: 'center',
  },
});
