import React, { useState } from "react";
import "./DepartmentForm.css";

function DepartmentForm() {
  const [formData, setFormData] = useState({
    department: "",
    month: "",
    totalMembers: "",
    newMembers: "",
    activities: "",
    traveled: "",
    excoMeetings: "",
  });

  const departments = [
    "Men",
    "Women",
    "Youth",
    "Children",
    "Choir",
    "Media",
    "Sanctuary",
    "Protocol",
    "Sanitation",
  ];

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="google-form">
      {/* Header */}
      <div className="google-form-header">
        <h1>Department Monthly Report</h1>
        <p className="form-description">Fill out the form carefully for this month’s departmental report.</p>
      </div>

      {/* Form Body */}
      <form className="google-form-body" onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Department <span className="required">*</span></label>
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Choose</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label>Month <span className="required">*</span></label>
          <select name="month" value={formData.month} onChange={handleChange} required>
            <option value="">Choose</option>
            {months.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <label>Total Members <span className="required">*</span></label>
          <input type="number" name="totalMembers" value={formData.totalMembers} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>New Members This Month <span className="required">*</span></label>
          <input type="number" name="newMembers" value={formData.newMembers} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>General Meetings & Activities <span className="required">*</span></label>
          <input type="text" name="activities" value={formData.activities} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Members Traveled (With Excuse) <span className="required">*</span></label>
          <input type="number" name="traveled" value={formData.traveled} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Number of Exco Meetings <span className="required">*</span></label>
          <input type="number" name="excoMeetings" value={formData.excoMeetings} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default DepartmentForm;