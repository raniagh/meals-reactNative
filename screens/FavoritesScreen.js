import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIds = favoriteMealsCtx.ids;

  const favoriteMeals = MEALS.filter((meal) => mealIds.includes(meal.id));
  return <MealsList meals={favoriteMeals} />;
}
export default FavoritesScreen;
