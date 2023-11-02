import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Products from './pages/products';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './store'
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <Products/>
  },
])
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <RouterProvider router={router}>
    <div className="App">
    </div>
    </RouterProvider>
    </PersistGate>
    </Provider>
  );
}

export default App;
