import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import AppListItemSeperator from "../components/AppListItemSeperator";

const initialProducts = [
  {
    id: "1",
    title: "Red jacket for sale",
    price: "100$",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: "2",
    title: "Couch in great condition",
    price: "1000$",
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  const [products, setProducts] = useState(initialProducts);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => {
          return (
            <AppCard
              title={item.title}
              subTitle={item.price}
              image={item.image}
              onPress={() => console.log("ListingsScreen", item)}
            />
          );
        }}
        ItemSeparatorComponent={AppListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setProducts([
            {
              id: "2",
              title: "Couch in great condition",
              price: "1000$",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default ListingsScreen;
