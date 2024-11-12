
# React Native Project

This is a React Native project built using TypeScript, showcasing the ability to fetch data, display it, and manage state effectively.

## Table of Contents
- [Project Setup](#project-setup)
- [Dependencies](#dependencies)
- [App Functionalities](#app-functionalities)
- [State Management](#state-management)
- [Custom Hooks](#custom-hooks)
- [UI Design](#ui-design)
- [Performance Optimization](#performance-optimization)
- [License](#license)

## Project Setup

To run the project locally, clone the repository and follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/farhun/flip-test-project.git
   cd flip-test-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the app in development mode:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Dependencies

This project uses the following libraries:

- **React Native**: For building the mobile application.
- **Redux Toolkit**: For state management.
- **React Navigation**: For navigating between screens.
- **Axios**: For making API requests.
- **React Native Modal**: For modal popups.
- **React Native Vector Icons**: For custom icons.

## App Functionalities

### Features:
- Fetches data from `https://recruitment-test.flip.id/frontend-test` API.
- Displays the fetched data in a clean, list-based UI.
- Implements sorting, filtering, and searching for data.
- Modal support for filter settings.
- Reusable custom hooks for fetching data and filtering/sorting.

### Screens:
- **TransactionListPage**: Displays the list of items with sorting and filtering options.
- **DetailTransactionPage**: Shows details of an individual item when selected.

## State Management

We are using **Redux** to manage the app's state. The state includes:
- `items`: An array to store the fetched data.
- `status`: Tracks the fetching status (`idle`, `loading`, `succeeded`, `failed`).
- `error`: Stores any error message if the fetch fails.

The app dispatches actions to fetch data from the API, and updates the Redux state accordingly.

## Custom Hooks

The following custom hooks are used in the app:

### `useFetchData`
- Fetches data from the API and returns the `items`, `status`, `error`, and a `refetch` function.

### `useFilterAndSort` & `useFilterModal`
- Filters and sorts the fetched data based on search input and selected sorting option.
- Provides options for sorting by `Nama A-Z`, `Nama Z-A`, `Tanggal Terbaru`, and `Tanggal Terlama`.

### `useIcon`
- A reusable hook to fetch different types of icons with optional `size`, `color`, and `onPress` handlers.

## UI Design

The app is designed to be simple and responsive:
- **List items**: Displayed with the main data fields, allowing the user to filter and sort.
- **Icons**: Used for actions such as sorting and retrying the fetch operation.
- **Modals**: Provide filter options without navigating away from the current screen.
- **Error handling**: A retry option is provided in case the data fetch fails.

### Code Style:
- Clean and readable code structure.
- Performance optimization, such as minimizing re-renders and optimizing imports.

## Performance Optimization

The app implements several techniques to ensure optimal performance:
- Minimized re-renders.
- Avoided unnecessary dependencies in hooks.
- Optimized imports to reduce bundle size.
- Efficient state management to avoid unnecessary state updates.

## License

This project is licensed under the MIT License