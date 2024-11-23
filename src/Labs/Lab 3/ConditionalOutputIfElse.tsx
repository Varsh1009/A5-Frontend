const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if (loggedIn) {
    return <h6 id="wd-conditional-output-if-else-welcome">Welcome If Else</h6>;
  } else {
    return (
      <h6 id="wd-conditional-output-if-else-login">Please login If Else</h6>
    );
  }
};
export default ConditionalOutputIfElse;
