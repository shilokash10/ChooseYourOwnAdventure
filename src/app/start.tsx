
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const footprints = require("@/assets/images/footprints.jpeg");

export default function StartScreen() {
  return (
    <View style={styles.container}>
      
      <Image source={footprints} style={styles.image} />

      <Text style={styles.story}>
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
    backgroundColor: "#4a7152",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    fontFamily: "Times New Roman",
    color: "#093c19",
    fontWeight: "bold",
    margin: 20,
  },
  story: {
  fontFamily: "Times New Roman",
  fontSize: 20,
},
image: {
    width: 320,
    height: 340,
    borderRadius: 4,
    marginBottom: 20,
  },
});