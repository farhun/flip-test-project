import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';
import CustomStatusBar from '../components/CustomStatusBar';
import { useFetchData } from '../hooks/useFetchData';
import { useFilterAndSort } from '../hooks/useFilterAndSort';
import { useFilterModal } from '../hooks/useFilterModal';
import { Colors } from '../themes/Colors';

/**
 * TransactionListPage component displays a list of transactions with search and filtering capabilities.
 * It fetches data using the useFetchData hook, applies search and filtering logic using useFilterAndSort,
 * and shows a filter modal when triggered. The component handles different states of data fetching (loading, error, success).
 *
 * - useFetchData: Handles the fetching of transaction data and manages loading and error states.
 * - useFilterAndSort: Provides filtering and sorting functionalities for the transaction data.
 * - useFilterModal: Manages the filter modal's visibility and content.
 * - The component conditionally renders LoadingComponent, ErrorComponent, or the transaction list based on data fetching state.
 * - Search functionality updates the search text and filters the data based on user input.
 * - The list of transactions is displayed using a FlatList and ListItem component.
 * 
 * param {Object} navigation - Navigation object for navigating between screens.
 */

const TransactionListPage = ({ navigation }: { navigation: any }) => {
  const { items, status, error, refetch } = useFetchData();
  const { filteredData, searchText, setSearchText, sort, setSort, filterData } = useFilterAndSort(items);
  const [modalFilter, setModalFilter] = useState(false);

  const { renderModalContent } = useFilterModal({
    isVisible: modalFilter,
    onClose: () => setModalFilter(false),
    sort,
    setSort,
    filterData,
    searchText,
  });

  const handleSearchTextChange = useCallback(
    (text: string) => {
      setSearchText(text);
      filterData(text);
    },
    [setSearchText, filterData]
  );

  if (status === 'loading' || status === 'idle') {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent refetch={refetch} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar barStyle="light-content" backgroundColor={Colors.orange} />
      {status === 'succeeded' && filteredData && filteredData.length > 0 && (
        <View style={styles.contentContainer}>
          <SearchBar 
            searchText={searchText} 
            setSearchText={handleSearchTextChange} 
            setModalFilter={setModalFilter} 
            sort={sort} 
            />
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
          />
        </View>
      )}
      {renderModalContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    padding: 10,
  },
  flatListContainer: {
    paddingBottom: 100,
  },
});

export default TransactionListPage;
