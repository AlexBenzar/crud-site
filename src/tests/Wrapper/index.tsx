import { Provider } from "react-redux";
import { store } from "store/store";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export function Wrapper(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
}
