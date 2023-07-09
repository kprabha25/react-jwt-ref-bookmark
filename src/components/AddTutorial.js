import React, { useState } from "react";
import TutorialDataService from "../services/tutorial.service";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    category: "",
    url: "",
    notes: "",
    domain: "",
    status: "",
    description: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      url: tutorial.url,
      domain: tutorial.domain,
      status: tutorial.status,
      description: tutorial.description
    };

    TutorialDataService.creatTutorial(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          url: response.data.url,
          domain: response.data.domain,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              id="url"
              required
              value={tutorial.url}
              onChange={handleInputChange}
              name="url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              className="form-control"
              id="domain"
              required
              value={tutorial.domain}
              onChange={handleInputChange}
              name="domain"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              className="form-control"
              id="status"
              required
              value={tutorial.status}
              onChange={handleInputChange}
              name="status"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
