import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import classes from "./Form.module.css";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    nameIsValid: false,
    nameIsFocus: false,
    email: "",
    emailIsValid: false,
    emailIsFocus: false,
    message: "",
    messageIsValid: false,
    messageIsFocus: false,
  });

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });

    if (e.target.value.includes("@")) {
      setForm((prev) => ({ ...prev, emailIsValid: true }));
    } else setForm((prev) => ({ ...prev, emailIsValid: false }));
  };

  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });
    if (form.email.includes("@")) {
      setForm((prev) => ({ ...prev, emailIsValid: true }));
    } else setForm((prev) => ({ ...prev, emailIsValid: false }));
  };

  const nameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, name: e.target.value };
    });
    if (e.target.value.length >= 4) {
      setForm((prev) => ({ ...prev, nameIsValid: true }));
    } else setForm((prev) => ({ ...prev, nameIsValid: false }));
  };

  const nameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, nameIsFocus: true };
    });
    if (form.name.length >= 4) {
      setForm((prev) => ({ ...prev, nameIsValid: true }));
    } else setForm((prev) => ({ ...prev, nameIsValid: false }));
  };

  const messageOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, message: e.target.value };
    });
    if (e.target.value.length >= 10) {
      setForm((prev) => ({ ...prev, messageIsValid: true }));
    } else setForm((prev) => ({ ...prev, messageIsValid: false }));
  };

  const messageOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, messageIsFocus: true };
    });
    if (form.message.length >= 10) {
      setForm((prev) => ({ ...prev, messageIsValid: true }));
    } else setForm((prev) => ({ ...prev, messageIsValid: false }));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      name: form.name,
      message: form.message,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Minimum length of 4"
        invalid={!form.nameIsValid && form.nameIsFocus ? "invalid" : ""}
        value={form.name}
        onChange={nameOnChangeHandler}
        onBlur={nameOnBlurHandler}
      />
      {form.nameIsFocus && !form.nameIsValid && (
        <pre className={classes.invalid__input}>
          Minimum length of name is 10
        </pre>
      )}

      <Input
        id="email"
        label="Email"
        type="email"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@email.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Enter a valid email</pre>
      )}
      <Input
        field="textarea"
        placeholder="Enter your message here"
        id="message"
        label="Message"
        type="message"
        invalid={!form.messageIsValid && form.messageIsFocus ? "invalid" : ""}
        value={form.message}
        onChange={messageOnChangeHandler}
        onBlur={messageOnBlurHandler}
      />
      {form.messageIsFocus && !form.messageIsValid && (
        <pre className={classes.invalid__input}>
          Minimum length of message is 4
        </pre>
      )}
      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Form;
