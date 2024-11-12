import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../themes/Colors';
import { useIcon } from '../hooks/useIcon';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
  setModalFilter: (visible: boolean) => void;
  sort: string;
}

/**
 * SearchBar is a UI component that allows users to search for transactions by name, bank, or nominal.
 * It includes an input field for searching and a button to open a modal for sorting options.
 *
 *  {string} searchText - The current search text that the user has entered.
 *  {function} setSearchText - A function to update the search text state when the user types.
 *  {function} setModalFilter - A function to toggle the visibility of a modal for sorting options.
 *  {string} sort - The current sort option displayed in the search bar.
 */

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText, setModalFilter, sort }) => (
  <View style={styles.container}>
    {useIcon({ type: 'Ionicons', name: 'search-outline', size: 30, color: Colors.grey })}
    <TextInput
      style={styles.searchInput}
      placeholder="Cari nama, bank, atau nominal"
      placeholderTextColor={Colors.grey}
      maxLength={200}
      onChangeText={setSearchText}
      value={searchText}
    />
    <TouchableOpacity onPress={() => setModalFilter(true)} style={styles.sortButton}>
      <Text style={styles.sortText}>{sort}</Text>
      {useIcon({ type: 'Ionicons', name: 'chevron-down', size: 27, color: Colors.orange })}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 13,
    paddingHorizontal: 5,
    flexGrow: 1,
    flexShrink: 1,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.orange,
  },
});

export default SearchBar;