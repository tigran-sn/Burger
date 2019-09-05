import React from "react";
import BurgerIngredients from "./BurgerIngredient";

import classes from "./Burger.module.css";

const Burger = props => {
  return (
    <div className={classes.Burger}>
      {props.ingredients.meat}
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="salad" />
      <BurgerIngredients type="bacon" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
