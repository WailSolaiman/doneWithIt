import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppCard from "./app/components/AppCard";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="Firstname" icon="email" />
    </Screen>
  );
};

export default App;
