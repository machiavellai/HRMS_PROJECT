import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "../../../layouts/Sidebar/Sidebar";
import Header from "../../../layouts/header/header";
import "./JobAdvertsForm.scss";
import DisplayHeader from "../../../components/DisplayHeader/DisplayHeader";

const JobAdvertisementForm = () => {
  const [jobPosition, setJobPosition] = useState("");
  const [city, setCity] = useState("");
  const [availablePositions, setAvailablePositions] = useState("");
  const [workingType, setWorkingType] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission of the job advertisement data
    // For example, send it to an API or perform any necessary actions.
    console.log("Job Position:", jobPosition);
    console.log("City:", city);
    console.log("Available Positions:", availablePositions);
    console.log("Working Type:", workingType);
    console.log("Working Time:", workingTime);
    console.log("Job Description:", jobDescription);
    console.log("Application Deadline:", applicationDeadline);
  };

  return (
    <Form className="job-advertisement-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">JOB ADVERTS</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="jobPosition">
            <Form.Label>Job Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job position"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="availablePositions">
            <Form.Label>Available Positions</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of available positions"
              value={availablePositions}
              onChange={(e) => setAvailablePositions(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="workingType">
            <Form.Label>Working Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter working type"
              value={workingType}
              onChange={(e) => setWorkingType(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="workingTime">
        <Form.Label>Working Time</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter working time"
          value={workingTime}
          onChange={(e) => setWorkingTime(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="jobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="applicationDeadline" className="mb-4">
        <Form.Label>Application Deadline</Form.Label>
        <Form.Control
          type="date"
          value={applicationDeadline}
          onChange={(e) => setApplicationDeadline(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default JobAdvertisementForm;
