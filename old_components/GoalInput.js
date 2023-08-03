// import {
//   StyleSheet,
//   View,
//   Button,
//   TextInput,
//   Modal,
//   Image,
// } from "react-native";
// import { useState } from "react";
// function GoalInput(props) {
//   const [enterGoalText, setEnteredGoalText] = useState("");

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     props.onAddGoal(enterGoalText);
//     setEnteredGoalText("");
//   }
//   //   function endAddGoalHandler() {
//   //     setModalIsVisible(false);
//   //   }
//   return (
//     <Modal visible={props.visible} animationType="slide">
//       <View style={styles.inputContainer}>
//         <Image
//           style={styles.image}
//           source={require("../assets/images/goal.png")}
//         />
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your course goal!"
//           onChangeText={goalInputHandler}
//           value={enterGoalText}
//         />
//         <View style={styles.buttonContainer}>
//           <View style={styles.button}>
//             <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
//           </View>
//           <View style={styles.button}>
//             <Button
//               style={styles.button}
//               title="Cancel"
//               color="#f31282"
//               onPress={props.onCancel}
//             />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// export default GoalInput;

// const styles = StyleSheet.create({
//   inputContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#311b6b",
//   },
//   image: { height: 100, width: 100, margin: 20 },
//   textInput: {
//     maxHeight: 45,
//     minHeight: 30,
//     borderWidth: 1,
//     padding: 16,
//     borderRadius: 6,
//     borderColor: "#e4d0ff",
//     backgroundColor: "#e4d0ff",
//     color: "#120438",

//     width: "100%",
//   },
//   buttonContainer: {
//     margin: 20,
//     flexDirection: "row",
//   },
//   button: {
//     width: "30%",
//     marginHorizontal: 8,
//   },
// });
