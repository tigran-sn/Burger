import React from "react";
import BurgerIngredients from "./BurgerIngredient";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  // bread-top and bread-bottom ingredient are always available
  return (
    <div className={classes.Burger}>
      {console.log(transformedIngredients)}
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
