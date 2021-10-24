const PersonalData = () => {
  return (
    <form>
      <h1>Personal Data</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter your name"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Last name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          className="form-control"
          placeholder="Enter your last name"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="birthday" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          className="form-control"
          placeholder="Enter your birthday"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          required
        />
      </div>
      <input type="submit" value="Next" className="btn btn-primary" />
    </form>
  );
};
export default PersonalData;
