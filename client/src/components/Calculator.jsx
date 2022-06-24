import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      unit: 'ezreal',
      needed: '1',
      contested: 2,
      gold: 0,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    let gold;

    gold = this.state.needed * 3 * this.state.contested

    this.setState({gold})
  }

  render() {
    return (
      <>
         <form onSubmit={this.handleSubmit}>
          <label>
            Your level:
            <input
              name="level"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Unit:
            <input
              name="unit"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of Units Needed:
            <input
              name="needed"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            How many are out of the pool:
            <input
              name="contested"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="calculate" />
        </form>

        {this.state.gold > 0
          ? <div>approximately {this.state.gold} gold needed</div>
          : <div> </div>}
      </>
    );
    }
}


export default Calculator;