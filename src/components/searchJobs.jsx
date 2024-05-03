import React, { useState, useEffect } from "react";
import "../assests/css/searchJobs.css";
import { useDispatch, useSelector } from "react-redux";
import { jobListRequest } from "../stores/jobs/jobActions";
import SearchJobFilters from "./searchJobFilters";
import "../assests/css/jobCard.css";
import { ThreeDots } from "react-loader-spinner";
import Jobcard from "./jobcard";

const initialFormData = {
  role: [],
  location: [],
  experience: null,
  remote: [],
  techStack: [],
  minimumBasePaySalary: null,
  isReferralAvailable: false,
  companyName: "",
};
function SearchJobs() {
  const [formData, setFormData] = useState(initialFormData);
  const [jobList, setJobList] = useState([]);
  const [totalJobList, setTotalJobList] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
    const filteredJobs = totalJobList.filter((job) =>
      filterJobs(job, formData)
    );
    setJobList(() => [filteredJobs]);
  };
  const filterJobs = (job, filters) => {
    // Filter by role
    if (filters.role.length > 0 && !filters.role.includes(job.jobRole)) {
      return false;
    }

    // Filter by number of employees
    console.log(JSON.stringify(filters.location), job.location);
    if (
      filters.location.length > 0 &&
      !filters.location.some((option) => option.value === job.location)
    ) {
      return false;
    }

    // Filter by experience
    if (
      filters.experience !== null &&
      (job.minExp > filters.experience || job.maxExp < filters.experience)
    ) {
      return false;
    }

    // Filter by remote
    if (filters.remote.length > 0 && !filters.remote.includes(job.remote)) {
      return false;
    }

    // Filter by tech stack
    if (
      filters.techStack.length > 0 &&
      !job.techStack.some((stack) => filters.techStack.includes(stack))
    ) {
      return false;
    }

    // Filter by minimum base pay salary
    if (
      filters.minimumBasePaySalary !== null &&
      (job.minJdSalary === null ||
        job.minJdSalary < filters.minimumBasePaySalary)
    ) {
      return false;
    }

    // Filter by referral availability
    if (filters.isReferralAvailable && !job.isReferralAvailable) {
      return false;
    }

    // If all filters pass, include the job in the filtered list
    return true;
  };

  const nextProps = useSelector((state) => ({
    jobDataList: state.Jobs.jobList,
    loading: state.Jobs.loading,
    offset: state.Jobs.offset,
  }));

  useEffect(() => {
    if (jobList.length <= 0) {
      const payload = {
        limit: 10,
        offset: 0,
      };
      dispatch(jobListRequest(payload));
    }
  }, []);

  useEffect(() => {
    console.log(nextProps.jobDataList);
    if (nextProps.jobDataList && nextProps.jobDataList.jdList) {
      const filteredJobs = nextProps.jobDataList.jdList.filter((job) =>
        filterJobs(job, formData)
      );
      setJobList((prevJobs) => [...prevJobs, ...filteredJobs]);
      setTotalJobList((prevJobs) => [
        ...prevJobs,
        ...nextProps.jobDataList.jdList,
      ]);
    }
  }, [nextProps.jobDataList]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (nextProps.jobDataList &&
          jobList.length >= nextProps.jobDataList.totalCount) ||
        nextProps.loading ||
        document.documentElement.offsetHeight - window.innerHeight >
          document.documentElement.scrollTop + 1
      ) {
        return;
      }
      const payload = {
        limit: 10,
        offset: nextProps.offset,
      };
      dispatch(jobListRequest(payload)); // Dispatch action to fetch more jobs when user scrolls to bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextProps.loading, dispatch, nextProps.offset]);
  return (
    <div>
      <SearchJobFilters
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <div className="cards-container">
        {jobList.map((job, index) => (
          <Jobcard job={job} key={index} />
        ))}
      </div>
      {nextProps.loading && (
        <div className="loader-container">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#55EFC4"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
    </div>
  );
}

export default SearchJobs;
