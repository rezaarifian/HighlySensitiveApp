import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    textStyling: {
        fontSize: 20,
        fontStyle: "italic",
        color: "black",
      },
      innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      },
      button: {
        flex: 1,
      },
      gridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        backgroundColor: "white",
        borderRadius: 4,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
      },
  });

  export default styles;