const AccessData = () => {
  return (
    <form>
      <h1>Access Data</h1>
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
      <div className="mb-3">
        <label htmlFor="repeat-password" className="form-label">
          Repeat password
        </label>
        <input
          type="password"
          name="repeat-password"
          id="repeat-password"
          className="form-control"
          placeholder="Enter your last repeat-password"
          autoComplete="off"
          required
        />
      </div>
      <input type="submit" value="Next" className="btn btn-primary" />
    </form>
  );
};

export default AccessData;
