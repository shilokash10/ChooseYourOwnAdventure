
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Part3Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.story}>
        You follow the footprints deeper
        into the forest.
        {"\n\n"}
        Suddenly, the footprints disappear.
        Your friend starts getting nervous
        and wants to turn around.
        {"\n\n"}
        You see a strange symbol carved
        into a tree and a narrow path
        covered in fog.
        {"\n\n"}
        What do you do?
      </Text>

      <Link href="/ending2" style={styles.button}>
        A: Follow the foggy path
      </Link>

      <Link href="/ending3" style={styles.button}>
        B: Investigate the strange symbol
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#8fac95",
    justifyContent: "center",
    padding: 20,
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