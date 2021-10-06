import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { Dialogs } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import {
  WebViewExtBase,
  WebViewExt
} from "@nota/nativescript-webview-ext/webview-ext";

type HomeScreenProps = {
  route: RouteProp<MainStackParamList, "Home">;
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

const htmlString = `
<html>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.69.1/maps/maps.css"
    />
    <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.69.1/maps/maps-web.min.js"></script>
  </head>
  <body style="width: 100%; height: 100%; margin: 0; padding: 0">
    <div
      id="map"
      style="width: 100%; height: 100%; background-color: orangered"
    ></div>
    <script>
      var map = tt.map({
        key: 'IGZBF1VBk0AjcA8NnrGp9RcG1AeYDsuC',
        container: 'map',
        style: 'tomtom://vector/1/basic-main',
      });
    </script>
  </body>
</html>
`;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <webView src={htmlString} />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  text: {
    textAlignment: "center",
    fontSize: 24,
    color: "black"
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf"
  }
});
