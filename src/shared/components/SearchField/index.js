import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const StyledFormGroup = styled(FormGroup)`
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

const StyledLabel = styled(Label)`
  margin: 0 10px;
`;

const StyledButton = styled(Button)`
  margin: 0 10px;
`;

function SearchField({ labelText, placeholder, buttonText, onSubmit = () => {}, ...props }) {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log(e);
      }}
      {...props}
    >
      <StyledFormGroup>
        <StyledLabel for="searchField">{labelText}</StyledLabel>
        <Input type="text" name="search" id="searchField" placeholder={placeholder} />
        <StyledButton type="submit">{buttonText}</StyledButton>
      </StyledFormGroup>
    </Form>
  );
}

SearchField.propTypes = {
  labelText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SearchField;
