import React from "react";
import photo from "./photo.png";

export class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  Education() {
    this.content = [];
    for (let key in this.props.state["Educations"]) {
      this.con = [];
      for (let keyy in this.props.state["Educations"][key]) {
        this.con.push(
          <p className="side">{this.props.state["Educations"][key][keyy]}</p>
        );
      }

      this.content.push(<div className="education">{this.con}</div>);
    }
    return this.content;
  }
  PracticalExperience() {
    this.content = [];
    for (let key in this.props.state["PracticalExperiences"]) {
      this.con = [];
      for (let keyy in this.props.state["PracticalExperiences"][key]) {
        this.con.push(
          <p className="side">
            {this.props.state["PracticalExperiences"][key][keyy]}
          </p>
        );
      }

      this.content.push(<div className="education">{this.con}</div>);
    }
    return this.content;
  }
  render() {
    return (
      <div className="preview">
        <header>
          <h1>{this.props.state.name}</h1>
        </header>
        <div className="main">
          <article>
            <h3 className="underline">Description</h3>
            <div>{this.props.state["Description"]}</div>
          </article>
          <article>
            <h3 className="underline">Experience</h3>
            <div>{this.PracticalExperience()}</div>
          </article>
          <article>
            <h3 className="underline ">Education</h3>
            <div>{this.Education()}</div>
          </article>
        </div>
        <div className="sidebar">
          <img src={this.props.state.photo} />
          <article>
            <h3 className="underline">Personal Details</h3>
            <div className="sc-jSgupP ljLyro">
              <article className="sc-iqHYGH kvotor">
                <h4 className="sc-crrsfI errNK">Address</h4>
                <p className="side">{this.props.state.Address}</p>
              </article>
              <article className="sc-iqHYGH kvotor">
                <h4 className="sc-crrsfI errNK">Phone Number</h4>
                <p className="side">{this.props.state.phoneNumber}</p>
              </article>
              <article className="sc-iqHYGH kvotor">
                <h4 className="sc-crrsfI errNK">Email</h4>
                <p className="side">{this.props.state.email}</p>
              </article>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
