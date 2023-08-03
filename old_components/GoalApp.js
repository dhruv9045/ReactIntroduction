// import { StyleSheet, View, FlatList, Button } from "react-native";
// import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import GoalItem from "./components/GoalItem";
// import GoalInput from "./components/GoalInput";
// export default function GoalApp() {
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [modalIsVisible, setModalIsVisible] = useState(false);

//   function startAddGoalHandler() {
//     setModalIsVisible(true);
//   }
//   function endAddGoalHandler() {
//     setModalIsVisible(false);
//   }
//   function addGoalHandler(enterGoalText) {
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enterGoalText, id: Math.random().toString() },
//     ]);
//     endAddGoalHandler();
//   }
//   function deleteGoalHandler(id) {
//     console.log("Delete" + id);
//     setCourseGoals((currentCourseGoals) => {
//       return currentCourseGoals.filter((goal) => goal.id !== id);
//     });
//   }

//   return (
//     <>
//       <StatusBar style="light" />
//       <View style={styles.appContainer}>
//         <Button
//           title="Add New Goal"
//           color="#5e0acc"
//           onPress={startAddGoalHandler}
//         />
//         <GoalInput
//           visible={modalIsVisible}
//           onAddGoal={addGoalHandler}
//           onCancel={endAddGoalHandler}
//         />
//         <View style={styles.goalsContainer}>
//           <FlatList
//             data={courseGoals}
//             renderItem={(itemData) => {
//               return (
//                 <GoalItem
//                   text={itemData.item.text}
//                   id={itemData.item.id}
//                   onDeleteItem={deleteGoalHandler}
//                 />
//               );
//             }}
//             keyExtractor={(item, index) => {
//               return item.id;
//             }}
//             alwaysBounceVertical={false}
//           />
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingHorizontal: 40,
//     paddingTop: 80,
//   },

//   goalsContainer: { flex: 5, paddingTop: 10 },
// });
