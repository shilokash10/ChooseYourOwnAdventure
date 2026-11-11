import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const gate = require("@/assets/images/gate.jpeg");

export default function Ending3Screen() {
  return (
    <View style={styles.container}>

      <Image source={gate} style={styles.image} />


      <Text style={styles.story}>
        Ending 3: The Escape
        {"\n\n"}
        You and your friend run through the forest
        {"\n\n"}
        You discover an old key hidden
        underneath a tree near a strange symbol.
        {"\n\n"}
        You pick up the key and continue walking.
        Eventually, you find a locked gate.
        {"\n\n"}
        You use the key to unlock the gate.
        You and your friend finally escape
        the forest and make it home safely!
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
    backgroundColor: "#599286",
  },
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#093c19",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    margin: 20,
  },
  story: {
  fontSize: 20,
  fontFamily: "Times New Roman",
},
image: {
    width: 320,
    height: 330,
    borderRadius: 4,
    marginBottom: 20,
  },

});