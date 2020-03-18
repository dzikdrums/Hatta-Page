import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled, { css } from 'styled-components';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import React from 'react';

const InnerWrapper1 = styled.div`
  width: 30%;
  margin: 56px 86px 66px;
`;

const InnerWrapper2 = styled.div`
  width: 50%;
  margin: 56px 86px 66px;
`;

const OuterWrapper = styled.div`
  color: black;
`;

const ContactReason = styled.h4`
  font-size: 13px;
  font-weight: bold;
  line-height: 160%;
`;

const StyledField = styled(Field)`
  border: 1px solid black;
  height: 18px;

  ${({ message }) =>
    message &&
    css`
      height: 50px;
    `};
`;

const StyledInputBracket = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10px 0;
`;

const StyledForm = styled(Form)``;

const StyledLabel = styled.label`
  font-size: 13px;
  margin-top: 7px;
`;

const About = () => (
  <>
    <InnerWrapper1>
      <Heading>contact</Heading>
      <Paragraph>
        White artists work from real to the abstract, architects must work from the abstract to the
        real
      </Paragraph>
    </InnerWrapper1>
    <OuterWrapper>
      <InnerWrapper2>
        <ContactReason>Contact reason</ContactReason>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) errors.name = 'Required';
            if (!values.message) errors.message = 'Required';
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <StyledInputBracket>
                <StyledLabel>Name</StyledLabel>
                <StyledField type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </StyledInputBracket>
              <StyledInputBracket>
                <StyledLabel>E-mail</StyledLabel>
                <StyledField type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </StyledInputBracket>
              <StyledInputBracket>
                <StyledLabel>Message</StyledLabel>
                <StyledField message="true" type="text" name="text" />
                <ErrorMessage name="email" component="div" />
              </StyledInputBracket>
              <Button type="submit" disabled={isSubmitting}>
                send message
              </Button>
            </StyledForm>
          )}
        </Formik>
      </InnerWrapper2>
    </OuterWrapper>
  </>
);

export default About;
