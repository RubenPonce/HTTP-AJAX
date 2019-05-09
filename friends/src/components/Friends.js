import React from "react";
import { Collapse, Card, Form, Label, Input, Button } from "reactstrap";
import "./Friends.css"
export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      enableEdit: false,
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
      age:"",
      email: "",
      enableEdit: !this.state.enableEdit
    })
  };
  

  enableEdit = (e)=>{
    e.preventDefault();
    this.setState({
      enableEdit: !this.state.enableEdit
    })
  }

  render() {
    return (
      <Card className="friend-card">
      
       
        <Form onSubmit={this.formSubmit} className="edit-friend">
        <div className={this.state.enableEdit ===false ? "form-buttons" : null}>
       {this.state.enableEdit===false ?  <Button onClick={() => this.props.deleteFriend(this.props.friend)} color="danger" outline >X</Button> : null}
       {this.state.enableEdit===false ? <Button onClick={this.enableEdit} outline ><i className="far fa-edit"></i></Button>: <div className="form-buttons"><Button color="primary" type="submit">Update</Button><Button onClick={this.enableEdit} color="secondary"><i className="fas fa-arrow-left"></i></Button></div>}
       </div>
        <h3 >
          {" "}
          {this.props.friend.name}
        </h3>
        <p >
          age: {this.props.friend.age}
        </p>
        <p >
          contact: {this.props.friend.email} 
        </p>
        
       

        <Collapse isOpen={this.state.enableEdit} className="friend-form">
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
