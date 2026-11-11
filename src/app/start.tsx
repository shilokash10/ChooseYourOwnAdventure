
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.story}>
        The Forest That Never Ends
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

     <Link href="/part2" style={styles.button}>
     A: Go to the old cabin
     </Link>
     
     <Link href="/part3" style={styles.button}>
     B: Follow the mysterious footprints
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