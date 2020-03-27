import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/states")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.state}>
                States: {item.state} | Cases: {item.cases} | Deaths:
                {item.deaths} | Active: {item.active}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
    return <div className="App"></div>;
  }
}
export default App;
