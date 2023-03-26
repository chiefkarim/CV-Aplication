//import logo from "./logo.svg";
import "./styles/App.css";
import React from "react";
import ReactToPrint from "react-to-print";
import General from "./components/general";
import Education from "./components/education";
import { PracticalExperience } from "./components/practicalExperience";
import { Preview } from "./components/preview";
import uniqid from "uniqid";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Education: 1,
      PracticalExperience: 1,
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, type, id) {
    this.name = e.currentTarget.name;
    this.value = e.currentTarget.value;
    if (type === "Educations") {
      if (this.state.Education > 1 && this.state.Educations) {
        this.setState({
          [type]: {
            ...this.state.Educations,
            [id]: { ...this.state.Educations[id], [this.name]: this.value },
          },
        });
      } else if (this.state.Education > 1) {
        this.setState({
          [type]: {
            ...this.state.Educations,
            [id]: { [this.name]: this.value },
          },
        });
      } else if (this.state.Educations) {
        this.setState({
          [type]: {
            [id]: { ...this.state.Educations[id], [this.name]: this.value },
          },
        });
      } else {
        this.setState({
          [type]: {
            [id]: { [this.name]: this.value },
          },
        });
      }
    } else if (type === "PracticalExperiences") {
      if (
        this.state.PracticalExperience > 1 &&
        this.state.PracticalExperiences
      ) {
        this.setState({
          [type]: {
            ...this.state.PracticalExperiences,
            [id]: {
              ...this.state.PracticalExperiences[id],
              [this.name]: this.value,
            },
          },
        });
      } else if (this.state.PracticalExperience > 1) {
        this.setState({
          [type]: {
            ...this.state.PracticalExperiences,
            [id]: { [this.name]: this.value },
          },
        });
      } else if (this.state.PracticalExperiences) {
        this.setState({
          [type]: {
            [id]: {
              ...this.state.PracticalExperiences[id],
              [this.name]: this.value,
            },
          },
        });
      } else {
        this.setState({
          [type]: {
            [id]: { [this.name]: this.value },
          },
        });
      }
    } else {
      this.setState({ [this.name]: this.value });
    }

    console.log(this.state);
  }
  add(type) {
    if (type === "PracticalExperience") {
      this.setState({
        Education: this.state.Education,
        PracticalExperience: this.state.PracticalExperience + 1,
      });
    }

    if (type === "Education") {
      this.setState({
        Education: this.state.Education + 1,
        PracticalExperience: this.state.PracticalExperience,
      });
    }
  }
  del(type) {
    if (type === "PracticalExperience") {
      if (this.state.PracticalExperience > 1) {
        this.setState({
          Education: this.state.Education,
          PracticalExperience: this.state.PracticalExperience - 1,
        });
      }
    }

    if (type === "Education") {
      if (this.state.Education > 1) {
        this.setState({
          Education: this.state.Education - 1,
          PracticalExperience: this.state.PracticalExperience,
        });
      }
    }
  }
  render() {
    return (
      <div>
        <header className="App-header">
          {/*Include Edit button For each Input*/}
          <h1>{this.Name}</h1>
          <General state={this.state} handleChange={this.handleChange} />
          <Education state={this.state} handleChange={this.handleChange} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20rem",
              marginBottom: "3rem",
            }}
          >
            <button onClick={() => this.add("Education")}>Add</button>
            <button onClick={() => this.del("Education")}>Delete</button>
          </div>
          <PracticalExperience
            state={this.state}
            handleChange={this.handleChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20rem",
              marginBottom: "3rem",
            }}
          >
            <button onClick={() => this.add("PracticalExperience")}>Add</button>
            <button onClick={() => this.del("PracticalExperience")}>
              Delete
            </button>
          </div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return (
                <button
                  style={{
                    marginBottom: "3rem",
                  }}
                >
                  Print PDF
                </button>
              );
            }}
            content={() => this.componentRef}
          />
        </header>
        <div className="App" ref={(el) => (this.componentRef = el)}>
          <header className="App-header">
            <Preview state={this.state} />
          </header>
          {/*input for Name,Email, Phone Number*/}
          {/*section to add Additional experience(School Name, Title of study, Date of study)*/}
          {/*Section for Practical experience (Company Name, Position Title, Main Task of your Job, Date From and until,) */}
          {/*Include Submit button*/}
          {/*Include Generate pdf button*/}
        </div>
      </div>
    );
  }
}
export default App;
