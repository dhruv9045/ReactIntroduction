import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

function PrimaryButton({ children, onPres }) {
  function pressHandler() {
    console.log("Pressed..");
  }

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
      }
      onPress={onPres}
      android_ripple={{ color: Colors.primary600 }}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    paddingVertical: 8,
    overflow: "hidden",
  },
  pressed: { opacity: 0.75 },
  buttonInnerContainer: {
    borderRadius: 28,
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: Colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {},
});
