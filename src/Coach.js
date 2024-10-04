import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap"; // Using Bootstrap for responsive layout
import axios from "axios";

const Coach = () => {
  const [coachData, setCoachData] = useState({
    name: "",
    email: "",
    experience: "",
    certifications: "",
  });

  useEffect(() => {
    axios
      .get("/api/coach")
      .then((response) => {
        setCoachData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUpdateCoach = (event) => {
    event.preventDefault();
    const updatedCoach = {
      name: event.target.name.value,
      email: event.target.email.value,
      experience: event.target.experience.value,
      certifications: event.target.certifications.value,
    };
    axios
      .put("/api/coach", updatedCoach)
      .then((response) => {
        setCoachData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <h1>Coach</h1>
          <form onSubmit={handleUpdateCoach}>
            <label>
              Name:
              <input type="text" name="name" value={coachData.name} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={coachData.email} />
            </label>
            <label>
              Experience:
              <textarea name="experience" value={coachData.experience} />
            </label>
            <label>
              Certifications:
              <textarea
                name="certifications"
                value={coachData.certifications}
              />
            </label>
            <button type="submit">Update Coach</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Coach;
