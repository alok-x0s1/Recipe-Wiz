import { Route, Routes } from "react-router-dom";
import {
	AboutPage,
	ContactPage,
	HomePage,
	RecipePage,
	SingleRecipe,
} from "./pages";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="relative px-12">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/recipes" element={<RecipePage />} />
				<Route path="/recipes/:recipeId" element={<SingleRecipe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
