
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Ending2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.story}>
        Ending 2: The Endless Forest
        {"\n\n"}
        You and your friend follow the narrow
        path covered in fog.
        {"\n\n"}
        After walking for hours, you notice
        that you keep passing the same tree.
        {"\n\n"}
        You try running in different directions,
        but every path leads back to the same place.
        {"\n\n"}
        Suddenly, you see a message carved
        into the tree that says,
        "You can never leave."
        {"\n\n"}
        You realize you are trapped
        in the forest forever.
        {"\n\n"}
        THE END
</Text>

      <Link href="/start" style={styles.button}>
      Play Again
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#8fac95",
  },
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#115b28",
    fontWeight: "bold",
    margin: 20,
  },
  story: {
  fontSize: 23,
},
});
