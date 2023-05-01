import React, { useEffect, useReducer, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, actions) => {
  if (actions.type === 'USER_INPUT') {
    return { value: actions.val, isValid: actions.val.trim().includes('@') }
  }
  if (actions.type === 'CHECK_INPUT') {
    return { value: state.value, isValid: state.value.trim().includes('@') }
  }
  return { value: '', isValid: null }
}
const passwordReducer = (state, actions) => {
  if (actions.type === 'USER_INPUT') {
    return { value: actions.val, isValid: actions.val.trim().length > 6 }
  }
  if (actions.type === 'CHECK_INPUT') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: null }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, emailDispatch] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })
  const [password, passwordDispatch] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  const { isValid: emailIsValid } = email;
  const { isValid: passwordIsValid } = password;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: 'USER_INPUT', val: event.target.value })
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "CHECK_INPUT" })
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: 'CHECK_INPUT' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${email.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${password.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;