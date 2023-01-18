import { store } from "../redux/store/app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/theme.css";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}
