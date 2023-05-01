export const RegisterPage = () => {
  return (
    <>
      <h1>Registration</h1>
      <form>
        <label>First name: <input type="text" /></label>
        <label>Last name: <input type="text" /></label>
        <label>Email: <input type="email" /></label>
        <label>Password: <input type="password" /></label>
        <label>Repeat password: <input type="password" /></label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}