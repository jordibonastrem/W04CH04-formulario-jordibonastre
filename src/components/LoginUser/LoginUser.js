const LoginUser = () => {
  return (
    <form>
      <h1>Login</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="Enter your username"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Enter your last password"
          autoComplete="off"
          required
        />
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="remember-password"
        />
        <label className="form-check-label" htmlFor="remember-password">
          Remember password
        </label>
      </div>
      <input type="submit" value="Acceder" className="btn btn-primary" />
    </form>
  );
};

export default LoginUser;
