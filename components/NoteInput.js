import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function NoteInput({ onAddNote }) {
  const [note, setNote] = useState('');

  const handleAdd = () => {
    onAddNote(note);
    setNote('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write a note..."
        style={styles.input}
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});
