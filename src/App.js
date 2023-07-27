import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  View,
  withAuthenticator,
  Image,
} from "@aws-amplify/ui-react";

function App({signout}) {
  return (
    <View className = "App">
      <Card>
        <Image src = {logo} className="App-logo" alt = "logo" />
        <Heading level = {1}> We have Auth now! </Heading>
      </Card>
      <Button onClick={signout}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);