import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import avatar1 from "../assests/images/avatar/dummyAvatar_1.jpg";
import avatar2 from "../assests/images/avatar/dummyAvatar_2.jpg";

function Jobcard({ job }) {
  return (
    <Card className="job-card">
      <CardContent>
        <div className="card-top">
          <div className="posted-time">
            <p>{`⏳ Posted 19 hours ago`}</p>
          </div>
        </div>
        <div className="company-section">
          <img src={job.logoUrl} alt="Company Logo" className="company-logo" />
          <div className="company-details">
            <Typography variant="h6" sx={{ fontSize: "13px", color: "#8b8b8" }}>
              {job.companyName}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
              {job.jobRole}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "11px" }}>
              {job.location}
            </Typography>
          </div>
        </div>
        <div className="salary-section">
          <Typography variant="body1">
            {job.minJdSalary !== null && job.maxJdSalary !== null
              ? `Estimated Salary: ₹${job.minJdSalary} - ${job.maxJdSalary} LPA`
              : job.minJdSalary !== null
              ? `Estimated Salary: ₹${job.minJdSalary} LPA`
              : job.maxJdSalary !== null
              ? `Estimated Salary: ₹${job.maxJdSalary} LPA`
              : ""}
          </Typography>
        </div>
        <div className="about-company">
          <Typography variant="body1">{job.jobDetailsFromCompany}</Typography>
        </div>
        <div className="about-view-job">
          <a href={job.jdLink}>View job</a>
        </div>
        <div className="experience">
          <Typography variant="body2">
            Minimum Experience <p>{job.minExp ? `${job.minExp} years` : ""}</p>
          </Typography>
        </div>
        <div className="easy-apply">
          <Button
            variant="contained"
            fullWidth
            href={job.jdLink}
            sx={{
              bgcolor: "#55EFC4",
              color: "#000",
              fontWeight: "500",
              ":hover": {
                bgcolor: "#55EFC4",
              },
            }}
          >
            ⚡ Easy Apply
          </Button>
        </div>
        <div className="easy-apply">
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{
              color: "#FFFF",
              fontWeight: "500",
              fontSize: "12px",
            }}
          >
            <AvatarGroup total={2} sx={{ marginInline: "10px" }}>
              <Avatar
                alt="Remy Sharp"
                src={avatar1}
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Travis Howard"
                src={avatar2}
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
            Unlock referral asks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Jobcard;
