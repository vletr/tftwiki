import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      unit: 'ezreal',
      needed: 1,
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
    let gold = 0;

    gold = this.state.level + this.state.needed + this.state.contested

    this.setState({gold})
  }

  render() {
    return (
      <>
         <form className="form-style-4" onSubmit={this.handleSubmit}>
          <label for="field1">
            Your level:
            <input
              name="level"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label for="field2">
            Unit:
            <input
              name="unit"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label for="field3">
            Number of Units Needed:
            <input
              name="needed"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label for="field4">
            How many are out of the pool:
            <input
              name="contested"
              type="number"
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="calculate" />
        </form>

        <br />

        {this.state.gold > 0
          ? <div>approximately {this.state.gold} gold needed</div>
          : <div> </div>}
      </>
    );
    }
}


export default Calculator;