import React from 'react';
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import "./EditableField.scss";

const EditableField = ({ value, onChange, placeholder }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      className="text-field"
      inputProps={{className: "text-field-input"}} />);
};

EditableField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default EditableField;