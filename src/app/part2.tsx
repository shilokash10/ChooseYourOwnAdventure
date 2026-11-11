import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const insideCabin = require("@/assets/images/insideCabin.jpeg");

export default function Part2Screen() {
  return (
    <View style={styles.container}>
      
      <Image source={insideCabin} style={styles.image} />

      <Text style={styles.story}>
        You and your friend walk toward the cabin.
        The windows are broken, and the door
        is slightly open.
        {"\n\n"}
        Inside, you see pictures of missing people.
        You notice a picture of yourself and
        your best friend!
        {"\n\n"}
        Suddenly, you hear footsteps
        coming from another room.
        {"\n\n"}
        What do you do?
      </Text>

      <Link href="/ending1" style={styles.button}>
        A: Hide in cabin closet
      </Link>

      <Link href="/ending3" style={styles.button}>
        B: Run outside and search for an exit
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
    backgroundColor: "#827966",
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
  fontFamily: "Times New Roman",
  fontSize: 20,
},
image: {
    width: 320,
    height: 360,
    borderRadius: 4,
    marginBottom: 20,
  },
});
