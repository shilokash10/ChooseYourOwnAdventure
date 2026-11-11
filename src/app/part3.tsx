import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const fog = require("@/assets/images/fog.jpeg");

export default function Part3Screen() {
  return (
    <View style={styles.container}>
      
      <Image source={fog} style={styles.image} />
      
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
    backgroundColor: "#7c877e",
    justifyContent: "center",
    padding: 20,
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
    width: 330,
    height: 400,
    borderRadius: 4,
    marginBottom: 20,
  },
});