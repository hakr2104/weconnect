import React, { Component } from "react";

export class Newblog extends Component {
  constructor(props) {
    super(props);

    this.state = { UserName: "", title: "", body: "" };
  }

  handletitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handlebody(event) {
    this.setState({
      body: event.target.value,
    });
  }
  handlesubmitclick() {
    const { UserName, title, body } = this.state;

    if (body == "" || title == "") {
      console.log("No field should be left empty");
      return;
    }
    // console.log("HI " + title + " " + body);
    fetch("http://localhost:8384/api/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(() => {
      console.log("NEW BLOG posted successfully");
    });
  }
  componentDidMount() {
    this.setState({
      UserName: localStorage.getItem("username"),
    });
  }
  render() {
    return (
      <>
        <input
          className="form-control border border-secondary"
          type="text"
          id="username"
          placeholder="Your Title starts here   "
          onChange={this.handletitle.bind(this)}
        />
        <input
          className="form-control border border-secondary mt-12"
          type="text-area"
          id="password"
          placeholder="Your Body goes here...."
          style={{ size: "40rem" }}
          onChange={this.handlebody.bind(this)}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-2"
          //   style={{ backgroundColor: "red" }}
          fontSize="10rem"
          id="login"
          onClick={() => this.handlesubmitclick()}
        >
          {" "}
          SUBMIT
        </button>
      </>
    );
  }
}

export default Newblog;
