import { useState, useEffect } from 'react';

/**
 * Custom hook for filtering and sorting an array of items based on search text and sorting options.
 * It allows for searching by name, bank, sender bank, and amount, 
 * and sorting by different criteria such as alphabetical order or date.
 *
 * param {any[]} items - An array of items to be filtered and sorted.
 * returns {Object} - An object containing the filtered data, search text, sorting option, 
 * and functions to update the search text, sorting option, and to filter data.
 */

export function useFilterAndSort(items: any[]) {
  const [filteredData, setFilteredData] = useState(items);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('URUTKAN');

  useEffect(() => {
    filterData(searchText);
  }, [items, searchText, sort]);

  const filterData = (text: string) => {
    let dataArray = Array.isArray(items) ? items : Object.values(items);
    let filtered = [...dataArray];

    if (text) {
      filtered = filtered.filter((item) =>
        item.beneficiary_name.toLowerCase().includes(text.toLowerCase()) ||
        item.beneficiary_bank.toLowerCase().includes(text.toLowerCase()) ||
        item.sender_bank.toLowerCase().includes(text.toLowerCase()) ||
        item.amount.toString().includes(text)
      );
    }

    switch (sort) {
      case 'Nama A-Z':
        filtered = filtered.sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name));
        break;
      case 'Nama Z-A':
        filtered = filtered.sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name));
        break;
      case 'Tanggal Terbaru':
        filtered = filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'Tanggal Terlama':
        filtered = filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      default:
        break;
    }

    setFilteredData(filtered);
  };

  return {
    filteredData,
    searchText,
    setSearchText,
    sort,
    setSort,
    filterData,
  };
}