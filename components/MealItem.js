import { Image, Pressable, StyleSheet, View } from "react-native";

function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({});
