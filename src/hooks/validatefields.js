import React from "react";

export function useFields() {
  const [errors, setErrors] = React.useState([]);

  function handleValidateField({ field, message }) {
    const fields = errors.find((item) => item.field === field);
    if (fields) return;
    setErrors((prev) => [...prev, { field, message }]);
  }

  function showMessageFieldError(fielName) {
    const currentField = errors.find((item) => item.field === fielName);
    return currentField?.message ? currentField?.message : "";
  }

  function resetFields() {
    setErrors([]);
  }

  return {
    errors,
    setErrors,
    handleValidateField,
    showMessageFieldError,
    resetFields,
  };
}
