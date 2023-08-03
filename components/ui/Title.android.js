import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    padding: 8,
    minHeight: 35,
    maxWidth: "80%",
    width: 300,
    borderColor: Colors.secondary500,
  },
});
