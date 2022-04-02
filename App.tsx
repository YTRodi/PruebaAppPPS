import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Login } from "./src/screens";

const App = () => {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
};

export default App;
