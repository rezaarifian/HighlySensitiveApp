import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

type Props = {
    item: string;
  };

const GridItem: React.FC<Props> = ({item}) => {
  return (
    item &&
    <View style={[styles.gridItem, { backgroundColor: `rgb(${item})` }]}>
      <Pressable style={styles.button} android_ripple={{ color: "#ccc" }}>
        <View style={[styles.innerContainer]}>
          <Text style={styles.textStyling}>{item}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GridItem;
