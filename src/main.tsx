import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {
    RouterProvider,
} from "react-router-dom";
import {router_root} from "@config/router/route.tsx";
import { Provider } from 'react-redux'
import {store_root}  from "@config/redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store_root}>
          <NextUIProvider>
              <RouterProvider router={router_root} />
          </NextUIProvider>
      </Provider>
  </React.StrictMode>,
)
