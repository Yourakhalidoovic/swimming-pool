import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'; // Using Bootstrap for responsive layout

const AncienNageur = () => {
  const [ancienNageur, setAncienNageur] = useState({
    name: '',
    email: '',
    swimmingHistory: '',
    achievements: '',
    contactInformation: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save ancien nageur data to database or API
  };

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <h1>Ancien Nageur</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={ancienNageur.name} onChange={(event) => setAncienNageur({ ...ancienNageur, name: event.target.value })} />
            </label>
            <label>
              Email:
              <input type="email" value={ancienNageur.email} onChange={(event) => setAncienNageur({ ...ancienNageur, email: event.target.value })} />
            </label>
            <label>
              Swimming History:
              <textarea value={ancienNageur.swimmingHistory} onChange={(event) => setAncienNageur({ ...ancienNageur, swimmingHistory: event.target.value })} />
            </label>
            <label>
              Achievements:
              <textarea value={ancienNageur.achievements} onChange={(event) => setAncienNageur({ ...ancienNageur, achievements: event.target.value })} />
            </label>
            <label>
              Contact Information:
              <textarea value={ancienNageur.contactInformation} onChange={(event) => setAncienNageur({ ...ancienNageur, contactInformation: event.target.value })} />
            </label>
            <button type="submit">Save Ancien Nageur</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AncienNageur;