
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const cabin = require("@/assets/images/cabin.jpeg");



export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌲 The Forest That Never Ends 🌲</Text>

      <Image source={cabin} style={styles.image} />

      <Link href="/start" style={styles.button}>
        Start Adventure
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b9d598",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#115b28",
    fontWeight: "bold",
    margin: 20,
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 4,
  },
  title: {
  fontSize: 27,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 20,
},
});
