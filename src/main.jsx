import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Provider from './authProvider/Provider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
