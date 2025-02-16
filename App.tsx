import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store";
import { Text, View } from 'react-native';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <View><Text>Tinder Cat..</Text></View>
    </Provider>
  );
}

export default App;
