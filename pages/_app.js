import { store } from "../redux/store/app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/theme.css";
import Layout from "../components/layout/layout";
import NotificationContainer from "../components/notifications/notificationContainer";
import HelperContainer from "../components/helpers/developHelper/helperContainer";
import CurrentVersion from "../components/layout/currentVersion";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Provider store={store} Component={Component}>
				<Layout>
					<NotificationContainer />
					<CurrentVersion />
					{/* <HelperContainer/> */}
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}

// import { SessionProvider } from "next-auth/react";
// </SessionProvider>
// 			<SessionProvider session={pageProps.session}>
