import React from "react";
import Select from "react-select";
import { FormControlLabel, Checkbox } from "@mui/material";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // Add more options as needed
];
const minExperienceOptions = [
  { value: 0, label: "0 years" },
  { value: 1, label: "1 year" },
  { value: 2, label: "2 years" },
  { value: 3, label: "3 years" },
  { value: 4, label: "4 years" },
  { value: 5, label: "5 years" },
  { value: 6, label: "6 years" },
];

const remoteOptions = [
  { value: "remote", label: "Remote" },
  { value: "on-site", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

const techStackOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "Ruby", label: "Ruby" },
  { value: "C++", label: "C++" },
];
const roleOptions = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Frontend Developer", label: "Frontend Developer" },
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Data Scientist", label: "Data Scientist" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "UX/UI Designer", label: "UX/UI Designer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
];

const minBasePayOptions = [
  { value: 1000000, label: "10 LPA" },
  { value: 1500000, label: "15 LPA" },
  { value: 2000000, label: "20 LPA" },
  { value: 2500000, label: "25 LPA" },
  { value: 3000000, label: "30 LPA" },
  { value: 3500000, label: "35 LPA" },
  { value: 4000000, label: "40 LPA" },
  { value: 4500000, label: "45 LPA" },
];
const locationOptions = [
  { value: "Bangalore", label: "Bangalore" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Delhi", label: "Delhi" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Chennai", label: "Chennai" },
  { value: "Pune", label: "Pune" },
  { value: "Kolkata", label: "Kolkata" },
];
function SearchJobFilters({ formData, handleInputChange }) {
  return (
    <div>
      <div className="jb-filter-container">
        <div className="field">
          {formData.role.length > 0 && <p className="title">Role</p>}
          <Select
            isMulti
            placeholder="Role"
            value={formData.role}
            onChange={(selectedOptions) =>
              handleInputChange("role", selectedOptions)
            }
            options={roleOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.location.length > 0 && (
            <p className="title">Number of Employees</p>
          )}
          <Select
            isMulti
            placeholder="Location"
            value={formData.location}
            onChange={(selectedOptions) =>
              handleInputChange("location", selectedOptions)
            }
            options={locationOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.experience && <p className="title">Experience</p>}
          <Select
            placeholder="Experience"
            value={formData.experience}
            onChange={(selectedOption) =>
              handleInputChange("experience", selectedOption)
            }
            isClearable
            options={minExperienceOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.remote.length > 0 && <p className="title">Remote</p>}
          <Select
            isMulti
            placeholder="Remote"
            value={formData.remote}
            onChange={(selectedOptions) =>
              handleInputChange("remote", selectedOptions)
            }
            options={remoteOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.techStack.length > 0 && <p className="title">Tech Stack</p>}
          <Select
            isMulti
            placeholder="Tech Stack"
            value={formData.techStack}
            onChange={(selectedOptions) =>
              handleInputChange("techStack", selectedOptions)
            }
            options={techStackOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.minimumBasePaySalary && (
            <p className="title">Minimum Base Pay Salary</p>
          )}
          <Select
            placeholder="Minimum Base Pay Salary"
            value={formData.minimumBasePaySalary}
            onChange={(selectedOption) =>
              handleInputChange("minimumBasePaySalary", selectedOption)
            }
            isClearable
            options={minBasePayOptions}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.companyName && <p className="title">Company Name</p>}
          <input
            className="input-field"
            placeholder="Search Company Name"
            value={formData.companyName}
            onChange={(event) =>
              handleInputChange("companyName", event.target.value)
            }
          />
        </div>
      </div>
      <div className="checkbox-container">
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                handleInputChange(
                  "isReferralAvailable",
                  !formData.isReferralAvailable
                )
              }
              checked={formData.isReferralAvailable}
            />
          }
          label="Show jobs with referrals available"
          sx={{ fontSize: "13px", fontWeight: "600" }}
        />
      </div>
    </div>
  );
}

export default SearchJobFilters;
