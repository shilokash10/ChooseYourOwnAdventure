
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text> The Forest That Never Ends
        {"\n\n"}
        One afternoon, you and your best friend
        explore a forest near your neighborhood.
        Everyone says people have gone missing there.
        {"\n\n"}
        The trail behind you suddenly disappears.
        Your phone has no service.
        {"\n\n"}
        Someone whispers your name.
        {"\n\n"}
        You see an old cabin and mysterious footprints.
        {"\n\n"}
        What do you do?
      </Text>

      <Link href="/ending1" style={styles.button}>
      A: Hide inside a closet
      </Link>
      
      <Link href="/part4" style={styles.button}>
      B: Run out of the cabin
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
