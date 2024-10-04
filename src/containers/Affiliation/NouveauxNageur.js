import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap"; // Using Bootstrap for responsive layout

const NouveauxNageur = () => {
  const [nouveauxNageur, setNouveauxNageur] = useState({
    name: "",
    email: "",
    swimmingGoals: "",
    contactInformation: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save nouveaux nageur data to database or API
  };

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <h1>Nouveaux Nageur</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={nouveauxNageur.name}
                onChange={(event) =>
                  setNouveauxNageur({
                    ...nouveauxNageur,
                    name: event.target.value,
                  })
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={nouveauxNageur.email}
                onChange={(event) =>
                  setNouveauxNageur({
                    ...nouveauxNageur,
                    email: event.target.value,
                  })
                }
              />
            </label>
            <label>
              Swimming Goals:
              <textarea
                value={nouveauxNageur.swimmingGoals}
                onChange={(event) =>
                  setNouveauxNageur({
                    ...nouveauxNageur,
                    swimmingGoals: event.target.value,
                  })
                }
              />
            </label>
            <label>
              Contact Information:
              <textarea
                value={nouveauxNageur.contactInformation}
                onChange={(event) =>
                  setNouveauxNageur({
                    ...nouveauxNageur,
                    contactInformation: event.target.value,
                  })
                }
              />
            </label>
            <button type="submit">Save Nouveaux Nageur</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default NouveauxNageur;
