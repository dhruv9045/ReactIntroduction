import { StyleSheet, Text } from "react-native";
import Colors from "../../Constants/colors";
function InstructionText({ children }) {
  return <Text style={styles.textStyle}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.secondary500,
    fontSize: 24,
  },
});
