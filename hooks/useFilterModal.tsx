import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../themes/Colors';
import { useIcon } from './useIcon';

type FilterModalProps = {
  isVisible: boolean;
  onClose: () => void;
  sort: string;
  setSort: (sortOption: string) => void;
  filterData: (text: string) => void;
  searchText: string;
};

/**
 * Custom hook for rendering a filter modal. The modal allows the user to select a sorting option
 * and filters data based on the selected option.
 *
 *  {boolean} isVisible - A boolean indicating whether the modal is visible or not.
 *  {function} onClose - A function to close the modal.
 *  {string} sort - The current sort option.
 *  {function} setSort - A function to update the sort option.
 *  {function} filterData - A function to filter the data based on the search text.
 *  {string} searchText - The current search text used for filtering.
 * 
 * returns {Object} - An object containing the `renderModalContent` function for rendering the modal UI.
 */

export const useFilterModal = ({
  isVisible,
  onClose,
  sort,
  setSort,
  filterData,
  searchText,
}: FilterModalProps) => {
  const sortOptions = [
    { label: 'URUTKAN', value: 'URUTKAN' },
    { label: 'Nama A-Z', value: 'Nama A-Z' },
    { label: 'Nama Z-A', value: 'Nama Z-A' },
    { label: 'Tanggal Terbaru', value: 'Tanggal Terbaru' },
    { label: 'Tanggal Terlama', value: 'Tanggal Terlama' },
  ];

  const renderModalContent = () => (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      useNativeDriver
      useNativeDriverForBackdrop
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContent}>
        <View style={{ padding: 10 }}>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => {
                setSort(option.value);
                filterData(searchText);
              }}
            >
              <View style={styles.optionRow}>
                {useIcon({ type: 'Ionicons', name: sort === option.value ? 'radio-button-on' : 'radio-button-off', size: 26, color: Colors.orange })}
                <Text style={styles.optionText}>{option.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  return { renderModalContent };
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: Colors.white,
    padding: 22,
    borderRadius: 4,
    borderColor: Colors.semiTransparent,
  },
  optionRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: Colors.orange,
    borderRadius: 5,
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});