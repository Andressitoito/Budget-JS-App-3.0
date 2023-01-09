import { store } from "../redux/store/app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
