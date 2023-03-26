import Reaact from "react";

class PracticalExperience extends Reaact.Component {
  constructor(props) {
    super(props);
  }

  content() {
    let content = [];

    for (let i = 0; i < this.props.state.PracticalExperience; i++) {
      content.push(
        <section>
          <h1>Practical Experience</h1>
          <div className="item">
            <label>Company Name:</label>
            <input
              type="text"
              name={"companyName" + i}
              onChange={(e) =>
                this.props.handleChange(e, "PracticalExperiences", i)
              }
            />
          </div>
          <div className="item">
            <label>Position Title:</label>
            <input
              type="text"
              name={"positionTitle" + i}
              onChange={(e) =>
                this.props.handleChange(e, "PracticalExperiences", i)
              }
            />
          </div>
          <div className="item">
            <label>Main Task:</label>
            <input
              type="text"
              name={"mainTask" + i}
              onChange={(e) =>
                this.props.handleChange(e, "PracticalExperiences", i)
              }
            />
          </div>
          <div className="item">
            <label>Date:</label>
            <input
              type="text"
              name={"WorkDate" + i}
              onChange={(e) =>
                this.props.handleChange(e, "PracticalExperiences", i)
              }
            />
          </div>
        </section>
      );
    }

    return content;
  }

  render() {
    return (
      /*Section for Practical experience (Company Name, Position Title, Main Task of your Job, Date From and until,) */
      this.content()
    );
  }
}
export { PracticalExperience };
