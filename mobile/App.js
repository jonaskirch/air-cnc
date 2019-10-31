import React from "react";
import { YellowBox } from "react-native";
import Routes from "./src/routes";
import { View, Text } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
