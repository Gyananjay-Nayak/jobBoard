import React from "react";
import Select from "react-select";
import { FormControlLabel, Checkbox } from "@mui/material";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // Add more options as needed
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
            options={options}
            className="select"
            classNamePrefix="select"
          />
        </div>
        <div className="field">
          {formData.numberOfEmployees.length > 0 && (
            <p className="title">Number of Employees</p>
          )}
          <Select
            isMulti
            placeholder="Number of Employees"
            value={formData.numberOfEmployees}
            onChange={(selectedOptions) =>
              handleInputChange("numberOfEmployees", selectedOptions)
            }
            options={options}
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
            options={options}
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
            options={options}
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
            options={options}
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
            options={options}
            className="select"
            classNamePrefix="select"
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