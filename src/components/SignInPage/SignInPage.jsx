import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignINPage.scss';

function SignInPage() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center sign-in-container">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="sign-in-card">
            <Card.Body>
              <Card.Title className="text-center mb-3">Sign In</Card.Title>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 sign-in-button">
                  Sign In
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Link to="/forgot-password" className="link-effect">
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center mt-2">
                <span>Don’t have an account? </span>
                <Link to="/sign-up" className="link-effect">
                  Sign Up
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
