import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { fetchRecipes } from "../../../api/recipes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getRecipes } from "../../../redux/selectors";
import RecipeListItem from "./RecipeListItem";

const RecipesListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  useEffect(() => {
    fetchRecipes(dispatch, () => setLoading(false));
  }, []);

  const _renderItem = ({ item }) => {
    return <RecipeListItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator animating size="large" />
      ) : (
        <FlatList
          data={recipes}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //width: '100%',
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
  },
});

export default RecipesListScreen;
