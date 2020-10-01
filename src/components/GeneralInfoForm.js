import React from 'react';

function GeneralInfoForm({
  fullName,
  email,
  phone,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="fullName"
          value={fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input name="email" value={email} onChange={handleChange} required />
      </label>
      <label>
        Phone Number:
        <input name="phone" value={phone} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfoForm;
