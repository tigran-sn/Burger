import React, { Component } from "react";
import Wrap from "../../../hoc/Wrap/Wrap";
import Button from "../../UI/Button";
// import classes from "./OrderSummary.module.css";

class OrderSummary extends Component {
  //   UNSAFE_componentWillUpdate() {
  //     console.log("[OrderSummary] WillUpdate");
  //   }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "uppercase" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Wrap>
        <h3>Your Order</h3>
        <p>Delicious order wit hthe following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Wrap>
    );
  }
}

export default OrderSummary;
