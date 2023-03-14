import { store } from "../redux/store/app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/theme.css";
import Layout from "../components/layout/layout";
import { SessionProvider } from "next-auth/react";
import NotificationContainer from "../components/notifications/notificationContainer";

export default function App({ Component, pageProps, session }) {

	return (
		<>
			<SessionProvider session={session}>
				<Layout>
					<Provider store={store} Component={Component}>
						<NotificationContainer />
						<Component {...pageProps} />
					</Provider>
				</Layout>
			</SessionProvider>
		</>
	);
}
