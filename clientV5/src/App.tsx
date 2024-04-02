import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { ThemeProvider } from "./context/ThemeContext";
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

genericGet();

function App() {
	return (
		<Router>
			<div className="App">
				<ThemeProvider>
					<Navbar />
					<div className="App_main">
						<Routes>
							<Route path="/about" element={<AboutPage />} />
							<Route path="/projects" element={<ProjectsPage />} />
							<Route path="/snippets" element={<SnippetsPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="*" element={<HomePage />} />
						</Routes>
						<ScrollToTopButton />
					</div>
				</ThemeProvider>
			</div>
		</Router>
	);
}

export default App;
