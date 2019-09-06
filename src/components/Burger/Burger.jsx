import React from "react";
import BurgerIngredients from "./BurgerIngredient";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map(igKey => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  // bread-top and bread-bottom ingredient are always available
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
