import "./App.scss";
import {
	Outlet,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
// global components
import Navbar from "./components/layout/Navbar";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";
// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SnippetsPage from "./pages/SnippetsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import { genericGet } from "./utils/utils_misc";
import ProjectPage from "./pages/ProjectPage";

genericGet();

function App() {
	return (
		<Router>
			<Provider store={store}>
				<div className="App">
					<ThemeProvider>
						<Navbar />
						<div className="App_main">
							<Routes>
								<Route path="about" element={<AboutPage />} />
								<Route path="projects" element={<ProjectsPage />} />
								<Route path="projects/:id" element={<ProjectPage />} />
								<Route path="snippets" element={<SnippetsPage />} />
								<Route path="contact" element={<ContactPage />} />
								<Route path="blog" element={<BlogPage />} />
								<Route path="*" element={<HomePage />} />
							</Routes>
							<ScrollToTopButton />
						</div>
					</ThemeProvider>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
