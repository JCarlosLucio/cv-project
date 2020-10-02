import React from 'react';

function EducationInfoForm({
  school,
  title,
  date,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        School:
        <input name="school" value={school} onChange={handleChange} required />
      </label>
      <label>
        Title:
        <input name="title" value={title} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input name="date" value={date} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationInfoForm;
