
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function part2Screen() {
  return (
    <View style={styles.container}>
      <Text>
        <Text>
  Part 2: The Old Cabin
  {"\n\n"}
  You and your friend walk toward the cabin.
  The windows are broken and the door is open.
  {"\n\n"}
  Inside, you see pictures of missing people.
  There is even a picture of you and your friend!
  {"\n\n"}
  Suddenly, you hear footsteps.
  {"\n\n"}
  What do you do?
</Text>
      </Text>

      <Link href="/part2" style={styles.button}>
        A: Go to the old cabin
      </Link>

      <Link href="/part3" style={styles.button}>
        B: Follow the footprints
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
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#0000ff",
    margin: 20,
  },
});
