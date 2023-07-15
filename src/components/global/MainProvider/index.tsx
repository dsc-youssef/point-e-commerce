// Dependencies
import React from "react";

// Redux
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Types
import { MainProviderProps } from "@/interfaces/global/components/MainProvider";

// Loading
import PageLoading from "../PageLoading";

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    </React.Suspense>
  )
}

export default MainProvider;