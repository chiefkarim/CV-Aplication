import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  content() {
    let content = [];

    for (let i = 0; i < this.props.state.Education; i++) {
      content.push(
        <section>
          <h1>Education</h1>
          <div className="item">
            <label>School Name:</label>
            <input
              type="text"
              name={"schoolName" + i}
              onChange={(e) => this.props.handleChange(e, "Educations", i)}
            />
          </div>
          <div className="item">
            <label>Title of study:</label>
            <input
              type="text"
              name={"titleOfStudy" + i}
              onChange={(e) => this.props.handleChange(e, "Educations", i)}
            />
          </div>
          <div className="item">
            <label>Date of study:</label>
            <input
              type="text"
              name={"dateOfStudy" + i}
              onChange={(e) => this.props.handleChange(e, "Educations", i)}
            />
          </div>
        </section>
      );
    }

    return content;
  }
  render() {
    return (
      /*section to add Additional experience(School Name, Title of study, Date of study)*/
      this.content()
    );
  }
}
export default Education;
