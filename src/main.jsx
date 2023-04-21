import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
// import { App } from './components';
import './index.css';
import { Layout } from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';

// import router from './components/App/App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
