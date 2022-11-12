import { useState } from "react";

const useForm = (valueValidator) => {
  const [enterValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enterValueIsVlid = valueValidator(enterValue);
  const hasError = !enterValueIsVlid && isTouched;

  const valueInputHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetState = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  const errorMessage = (message) => {
    return hasError ? message : "";
  };

  const stylesController = (style) => {
    return hasError ? style + " invalid" : style;
  };

  return {
    value: enterValue,
    isValid: enterValueIsVlid,
    valueInputHandler,
    valueInputBlurHandler,
    hasError,
    resetState,
    errorMessage,
    stylesController,
  };
};

export default useForm;
