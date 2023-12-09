import Home from "./Screens/Home";
import DataFetchingContextProvider from "./Context/DataFetchingContext/DataFetchingContextProvider";
import SettingsContextProvider from "./Context/SettingsContext/ContextProvider";
function App() {
  return (
    <DataFetchingContextProvider>
      <SettingsContextProvider>
        <Home />
      </SettingsContextProvider>
    </DataFetchingContextProvider>
  );
}

export default App;
