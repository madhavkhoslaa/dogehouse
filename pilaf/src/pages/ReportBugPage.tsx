import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TitledHeader } from "../components/header/TitledHeader";
import { colors } from "../constants/dogeStyle";

export const ReportBugPage: React.FC = () => {
  return (
    <>
      <TitledHeader title={"Report bug"} showBackButton={true} />
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary900,
  },
});
