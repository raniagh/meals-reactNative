import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId,
    });
  }, [mealId]);
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
