function InfoForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" name="firstName" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" placeholder="Alex" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" name="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" placeholder="Smith" />
      </div>
      <div className="mb-3">
        <label htmlFor="address" name="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="123 Lemon Lane"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" name="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input type="tel" className="form-control" placeholder="Alex" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default InfoForm;
