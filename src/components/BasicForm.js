import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  // Valid Condition
  const nameCondition = (value) => value.trim() !== "";
  const lastNameCondition = (value) => value.trim() !== "";
  const emailCondition = (value) => value.trim() !== "" && value.includes("@");

  // First Name
  const {
    value: enterValue,
    isValid: nameIsValid,
    valueInputHandler: nameInputHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    resetState: resetNameState,
    errorMessage: nameErrorMessage,
    stylesController: nameStyles,
  } = useForm(nameCondition);

  // Last Name
  const {
    value: enterLastNameValue,
    isValid: lastNameIsValid,
    valueInputHandler: lastNameInputHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    resetState: resetLastNameState,
    errorMessage: lastNameErrorMessage,
    stylesController: lastNameStyles,
  } = useForm(lastNameCondition);

  // Email
  const {
    value: enterEmailValue,
    isValid: emailIsValid,
    valueInputHandler: emailInputHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    resetState: resetEmailState,
    errorMessage: emailErrorMessage,
    stylesController: emailStyles,
  } = useForm(emailCondition);

  // FORM

  let formIsValid = false;

  if (nameIsValid & emailIsValid & lastNameIsValid) {
    formIsValid = true;
  }

  const formSumit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetNameState();
    resetLastNameState();
    resetEmailState();

    alert(
      `Thank you ${enterValue} ${enterLastNameValue}, Your message is submitted!! 🐧🐧🐧`
    );
  };

  // Error control
  const nameShowError = nameErrorMessage(
    <p className="error-text">First Name must no valid!</p>
  );
  const lastNameShowError = lastNameErrorMessage(
    <p className="error-text">Last Name must no valid!</p>
  );
  const emailShowError = emailErrorMessage(
    <p className="error-text">Email must no valid! (includes @ notation)</p>
  );

  // Styles control
  const nameStyle = nameStyles("form-control");
  const lastNameStyle = lastNameStyles("form-control");
  const emailStyle = emailStyles("form-control");

  return (
    <form onSubmit={formSumit}>
      <div className="control-group">
        <div className={nameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            onBlur={nameInputBlurHandler}
            value={enterValue}
          />
          {nameShowError}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            onBlur={lastNameInputBlurHandler}
            value={enterLastNameValue}
          />
          {lastNameShowError}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enterEmailValue}
        />
        {emailShowError}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
