
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const closet = require("@/assets/images/closet.jpeg");

export default function Ending1Screen() {
  
  return (
    <View style={styles.container}>

      <Image source={closet} style={styles.image} />


      <Text style={styles.story}>
        Ending 1: The Missing People
        {"\n\n"}
        You hide inside a closet.
        The footsteps get closer.
        {"\n\n"}
        Someone opens the closet door.
        They look exactly like you!
        {"\n\n"}
        Everything goes black.
        {"\n\n"}
        You wake up trapped inside a picture
        on the cabin wall.
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
    backgroundColor: "#151816",
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
  color: "#f5f8f6",
},
image: {
    width: 320,
    height: 380,
    borderRadius: 4,
    marginBottom: 20,
  },
});
