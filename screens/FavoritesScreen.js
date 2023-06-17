import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIds = favoriteMealsCtx.ids;

  const favoriteMeals = MEALS.filter((meal) => mealIds.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have No favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList meals={favoriteMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
