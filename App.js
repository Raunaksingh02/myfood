import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Navigation from './navigation.js';
import {store,persistor} from './store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';



export default function App() {
  return (
    <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
  <TailwindProvider>
     <Navigation/>
     </TailwindProvider>
     </PersistGate>
    </Provider>
   
  );
}


