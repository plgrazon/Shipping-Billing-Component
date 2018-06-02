import React from 'react';
import axios from 'axios';

import { seeds } from '../../db/sql/seed';

import ShippingTable from './tables/ShippingTable';
import ReturnPolicyTable from './tables/ReturnPolicyTable';

class Shipping extends React.Component {
  constructor() {
    super();

    const countries = seeds.map(item => item.country);

    this.state = {
      defaultCountry: 'United States of America',
      selectedCountry: '',
      countries: [...countries],
      basicRate: '',
      expeditedRate: '',
      oneDayRate: '',
      quantity: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // not implemented yet:
    // this.handleChangeInQty = this.handleChangeInQty.bind(this);
  }

  componentDidMount() {
    this.handleDefault();
  }

  handleDefault() {
    axios({
      method: 'get',
      url: 'api/shipping',
      params: {
        country: this.state.defaultCountry
      }
    })
    .then(({ data }) => {
      console.log(data);

      this.setState({
        basicRate: data.basic_rate,
        expeditedRate: data.expedited_rate,
        oneDayRate: data.one_day_rate
      });
    })
    .catch(err => {
      console.log('error fetching from client');
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.selectedCountry) {
      axios({
        method: 'get',
        url: 'api/shipping',
        params: {
          country: this.state.selectedCountry
        }
      })
      .then(({ data }) => {
        this.setState({
          defaultCountry: data.country,
          basicRate: data.basic_rate,
          expeditedRate: data.expedited_rate,
          oneDayRate: data.one_day_rate
        });
      })
      .catch(err => {
        console.log('error fetching from client');
      });
    }
  }

  handleChange(event) {
    this.setState({
      selectedCountry: event.target.value
    }, () => console.log(this.state.selectedCountry));
  }

  //not implemented on the actual ebay site
  /*
  handleChangeInQty(event) {
    console.log(event.target.value);
    let expeditedFee = this.state.quantity * 3;
    let oneDayRateFee = this.state.quantity * 5;

    if (this.state.quantity > 1) {
      let totalExp = this.state.expeditedRate + expeditedFee;
      let totalOne = this.state.oneDayRate + oneDayRateFee;

      this.setState({
        expeditedRate: totalExp,
        oneDayRate: totalOne
      });
    }
  }
  *///////////////////////////////////////////

  render() {
    let tableStyle = {
      width: '100%'
    };

    return(
      <div>
        <h1>Shipping and Billing</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          {"QTY: "}<input
            onChange={this.handleChangeInQty}
            type="number" min="1"
          ></input>{" "}
          <label>
            { "Change Country: " }
            <select
              value={this.state.selectedCountry || this.state.defaultCountry}
              onChange={this.handleChange}
              >
              {
                this.state.countries.map(country => (
                  <option>{country}</option>
                ))
              }
            </select>
          </label>
          {" "}<button>Get Rates</button>
        </form>
        <br></br>
        <div>
          <ShippingTable
            basicRate={this.state.basicRate}
            expeditedRate={this.state.expeditedRate}
            oneDayRate={this.state.oneDayRate}
            defaultCountry={this.state.defaultCountry}
          />
        </div>
        <div>
          <ReturnPolicyTable />
        </div>
      </div>
    )
  }
}

export default Shipping;
