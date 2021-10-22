const AccessData = ({ username, password, repeatPassword }) => {
  return (
    <form className="row g-3 needs-validation" novalidate>
      <div className="col-md-4">
        <label for="validationCustomUsername" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          ></input>
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div className="col-md-4">
        <label for="validationCustomUsername" className="form-label">
          Password
        </label>
        <div className="input-group has-validation">
          <input
            type="password"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          ></input>
          <div className="invalid-feedback">Please choose a password.</div>
        </div>
      </div>
      <div className="col-md-4">
        <label for="validationCustomUsername" className="form-label">
          Repeat Password
        </label>
        <div className="input-group has-validation">
          <input
            type="password"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          ></input>
          <div className="invalid-feedback">Please choose a password.</div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default AccessData;
