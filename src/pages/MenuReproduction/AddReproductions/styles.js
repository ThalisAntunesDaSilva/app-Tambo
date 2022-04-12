import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#727286",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  text: {
    fontSize: 19,
  },

  input: {
    borderRadius: 10,
    height: 40,
    width: 300,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
  
  },

  picker: {
    borderRadius: 10,
    height: 40,
    width: 300,
    borderWidth: 1,
  },

  body: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },

  data: {
      backgroundColor:'red'

  },

  button: {
    backgroundColor: "#000000",
    color: "#ffffff",
    height: 40,
    width: 110,
    marginTop: 40,
    borderRadius: 20,
    color: "#ffffff",
    paddingLeft: 45,
    paddingTop: 10,
  },
  textButton: {
    color: "#ffffff",
  },
});
