import React, { Component } from "react";
import Button from "../../../components/Ui/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../components/Ui/Spinner/Spinner";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    console.log(this.props.ingredients);

    // here you can make ajax calls like say axios.post{...}
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "faithful",
        address: {
          street: "teststreet 1",
          zipCode: "41351",
          country: "Malaysia"
        },
        email: "test@test.com",
        deliveryMethod: "fastest"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
