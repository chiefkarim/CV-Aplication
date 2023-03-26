import React from "react";
import "./general.css";
class General extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /*input for Name,Email, Phone Number*/
      <section>
        <h1>General Information</h1>
        <div className="item">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.props.handleChange(e)}
          />
        </div>
        <div className="item">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={(e) => this.props.handleChange(e)}
          />
        </div>
        <div className="item">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) => this.props.handleChange(e)}
          />
        </div>
        <div className="item">
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            onChange={(e) => this.props.handleChange(e)}
          />
        </div>
        <div className="item">
          <label>Description:</label>
          <textarea
            id="txtArea"
            rows="10"
            cols="20"
            type="textarea"
            name="Description"
            onChange={(e) => this.props.handleChange(e)}
          ></textarea>
        </div>
        <div className="item">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={(e) => this.props.input(e.target.files[0])}
          />
        </div>
      </section>
    );
  }
}
export default General;
