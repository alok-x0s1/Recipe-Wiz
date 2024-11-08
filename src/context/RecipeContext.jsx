import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async () => {
		const q = query(collection(db, "recipes"));
		const querySnapshot = await getDocs(q);

		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({ ...doc.data() });
		});

		setRecipes(data);
	};

	useEffect(() => {
		if (recipes.length === 0) {
			fetchRecipes();
		}
	}, []);

	return (
		<RecipeContext.Provider value={{ recipes }}>
			{children}
		</RecipeContext.Provider>
	);
};

export const useRecipe = () => {
	return useContext(RecipeContext);
};

export default RecipeProvider;
