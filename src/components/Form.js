import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }

  handleUsernameChange = (e) => {
    // console.log(e.target.value);
    // e.preventDefault();
    this.setState({
      username: e.target.value
    });
  };

  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, comments, topic } = this.state;
    alert(`Username: ${username}, Comments: ${comments}, Topic: ${topic}`);
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
