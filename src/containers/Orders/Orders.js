import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "axios";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    // use this to fetch data from our backend
    // axios
    console.log("I have fetched data");
    //   .get("/orders")

    //   .then(response => {
    //     this.setState({ loading: false, orders: response.data });
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //   });
  }

  render() {
    return (
      <div>
        <Order />
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
