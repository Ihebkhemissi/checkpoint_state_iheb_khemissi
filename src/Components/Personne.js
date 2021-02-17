import React from "react";

class Personne extends React.Component {
  state = {
    timer: 0,
    interval: null,
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div className="info">
        <h2 className="FullName">Iheb Khemissi</h2>
        <h2 className="bio">
          I am 24 years old I was a student at ISET Beja, I did an Applied
          bachelor's degree in computer technology.{" "}
        </h2>
        <img
          src="iheb.jpg"
          alt="iheb"
          style={{ width: "50%", height: "50%" }}
        />
        <h2 className="pofession">IT devoloper</h2>
        <h3>{this.state.timer}</h3>
      </div>
    );
  }
}

export default Personne;
