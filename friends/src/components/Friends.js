import React from "react";
import { Collapse, Card, Form, Label, Input, Button } from "reactstrap";
import "./Friends.css";
export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      toggleEdit: false
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const obj = { ...this.state, id: this.props.friend.id };

    console.log(obj);
    this.props.editFriend(obj);
    this.setState({
      name: "",
      age: "",
      email: "",
      toggleEdit: !this.state.toggleEdit
    });
  };

  toggleEdit = e => {
    e.preventDefault();
    this.setState({
      toggleEdit: !this.state.toggleEdit
    });
  };

  render() {
    return (
      <Card className="friend-card">
        <Form onSubmit={this.formSubmit} className="edit-friend">
          <div
            className={this.state.toggleEdit === false ? "form-buttons" : null}
          >
            {this.state.toggleEdit === false ? (
              <Button
                onClick={() => this.props.deleteFriend(this.props.friend)}
                color="danger"
                outline
              >
                X
              </Button>
            ) : null}
            {this.state.toggleEdit === false ? (
              <Button onClick={this.toggleEdit} outline>
                <i className="far fa-edit" />
              </Button>
            ) : (
              <div className="form-buttons">
                <Button color="primary" type="submit">
                  Update
                </Button>
                <Button onClick={this.toggleEdit} color="secondary">
                  <i className="fas fa-arrow-left" />
                </Button>
              </div>
            )}
          </div>
          <h3> {this.props.friend.name}</h3>
          <p>age: {this.props.friend.age}</p>
          <p>contact: {this.props.friend.email}</p>

          <Collapse isOpen={this.state.toggleEdit} className="friend-form">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"name"}
            />

            <Label htmlFor="age">Age</Label>
            <Input
              required
              value={this.state.age}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"age"}
            />

            <Label htmlFor="email">email</Label>
            <Input
              required
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"email"}
            />
          </Collapse>
        </Form>
      </Card>
    );
  }
}
