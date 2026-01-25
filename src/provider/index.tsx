import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const ProviderConf = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}
         <Toaster />
      </QueryClientProvider>
      
    </Provider>
  );
};

export default ProviderConf;
