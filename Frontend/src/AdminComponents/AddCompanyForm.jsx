// components/AddCompanyForm.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import apiClient from "../services/apiClient";

export default function AddCompanyForm({ onAddCompany }) {
  const [form, setForm] = useState({
    companyName: "",
    jobRole: "",
    salaryMin: "",
    salaryMax: "",
    applicationCode: "",
    cgpa: "",
    backlogs: "",
    internships: "",
    branches: [],
    deadline: "",
    openings: "",
    skills: [],
    overview: "",
    website: "",
    headquarters: "",
    jobTitle: "",
    jobOverview: "",
    responsibilities: [""], // Initialize with one empty field
  });

  const [skillInput, setSkillInput] = useState("");

  const branches = [
    "CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "AIML", "AI&DS"
  ];

  const suggestedSkills = [
    "React", "Node.js", "MongoDB", "Python", "Java", "C++", "Communication", "Leadership"
  ];

  const handleFormChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleBranchToggle = (branch) => {
    setForm((prev) => ({
      ...prev,
      branches: prev.branches.includes(branch)
        ? prev.branches.filter((b) => b !== branch)
        : [...prev.branches, branch],
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !form.skills.includes(skillInput.trim())) {
      setForm({ ...form, skills: [...form.skills, skillInput.trim()] });
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill) =>
    setForm({ ...form, skills: form.skills.filter((s) => s !== skill) });

  // Handle Responsibilities Array
  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = [...form.responsibilities];
    updatedResponsibilities[index] = value;
    setForm({ ...form, responsibilities: updatedResponsibilities });
  };

  const handleAddResponsibility = () => {
    setForm({ ...form, responsibilities: [...form.responsibilities, ""] });
  };

  const handleRemoveResponsibility = (index) => {
    if (form.responsibilities.length > 1) {
      const updatedResponsibilities = form.responsibilities.filter((_, i) => i !== index);
      setForm({ ...form, responsibilities: updatedResponsibilities });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out empty responsibilities
    const filteredResponsibilities = form.responsibilities.filter(r => r.trim() !== "");

    // Prepare data according to schema
    const companyData = {
      company_name: form.companyName,
      job_role: form.jobRole,
      salary: {
        min: Number(form.salaryMin),
        max: Number(form.salaryMax),
        unit: "LPA"
      },
      application_code: form.applicationCode,
      eligibility: {
        branches: form.branches,
        min_gpa: Number(form.cgpa) || 0,
        max_backlogs: Number(form.backlogs) || 0,
        min_internships: Number(form.internships) || 0
      },
      deadline: form.deadline,
      openings: Number(form.openings),
      required_skills: form.skills,
      company_overview: {
        description: form.overview,
        website: form.website,
        headquarters: form.headquarters
      },
      job_description: {
        title: form.jobTitle,
        overview: form.jobOverview,
        duties_and_responsibilities: filteredResponsibilities
      }
    };

    try {
      const response = await apiClient.post("/admin/company", companyData);

      if (response.data.success) {
        alert("Company added successfully!");

        // Reset form
        setForm({
          companyName: "",
          jobRole: "",
          salaryMin: "",
          salaryMax: "",
          applicationCode: "",
          cgpa: "",
          backlogs: "",
          internships: "",
          branches: [],
          deadline: "",
          openings: "",
          skills: [],
          overview: "",
          website: "",
          headquarters: "",
          jobTitle: "",
          jobOverview: "",
          responsibilities: [""],
        });

        // Call parent callback if provided
        if (onAddCompany) onAddCompany(response.data.company);
      }
    } catch (err) {
      console.error("Error adding company:", err);
      alert(`Failed to add company: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Add New Company
      </h2>

      {/* Basic Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
        <input
          type="text"
          name="jobRole"
          placeholder="Job Role"
          value={form.jobRole}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
      </div>

      {/* Application Code */}
      <input
        type="text"
        name="applicationCode"
        placeholder="Application Code (Unique)"
        value={form.applicationCode}
        onChange={handleFormChange}
        className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 w-full"
        required
      />

      {/* Salary */}
      <div className="flex gap-2">
        <input
          type="number"
          name="salaryMin"
          placeholder="Min Salary"
          value={form.salaryMin}
          onWheel={(e) => e.target.blur()}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg w-1/2 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          required
        />
        <input
          type="number"
          name="salaryMax"
          placeholder="Max Salary"
          value={form.salaryMax}
          onWheel={(e) => e.target.blur()}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg w-1/2 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          required
        />
        <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm self-center text-gray-700 dark:text-gray-300">LPA</span>
      </div>

      {/* Eligibility */}
      <h3 className="font-semibold text-gray-700 dark:text-gray-300">Eligibility</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="number"
          step="0.01"
          name="cgpa"
          placeholder="Minimum CGPA"
          value={form.cgpa}
          onWheel={(e) => e.target.blur()}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
        />
        <input
          type="number"
          name="backlogs"
          placeholder="Max Backlogs"
          value={form.backlogs}
          onWheel={(e) => e.target.blur()}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
        />
        <input
          type="number"
          name="internships"
          placeholder="Min Internships"
          onWheel={(e) => e.target.blur()}
          value={form.internships}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
        />
      </div>

      {/* Branches */}
      <div>
        <p className="font-medium mb-2 text-gray-700 dark:text-gray-300">Eligible Branches:</p>
        <div className="flex flex-wrap gap-2">
          {branches.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => handleBranchToggle(b)}
              className={`px-4 py-2 rounded-full border transition ${form.branches.includes(b)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Deadline & Openings */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          required
        />
        <input
          type="number"
          name="openings"
          placeholder="No. of Openings"
          onWheel={(e) => e.target.blur()}
          value={form.openings}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          required
        />
      </div>

      {/* Skills */}
      <div>
        <p className="font-medium text-gray-700 dark:text-gray-300">Required Skills:</p>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
            placeholder="Add skill..."
            className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg flex-grow focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="text-white px-4 rounded-lg transition-colors duration-200"
            style={{ backgroundColor: '#0ea5e9' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {form.skills.map((s, idx) => (
            <span
              key={idx}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {s}
              <button
                type="button"
                onClick={() => handleRemoveSkill(s)}
                className="text-red-500 dark:text-red-400 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Quick Add:
          {suggestedSkills.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() =>
                !form.skills.includes(s) &&
                setForm({ ...form, skills: [...form.skills, s] })
              }
              className="ml-2 bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-800 px-3 py-1 rounded-lg text-gray-700 dark:text-gray-300"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Company Overview */}
      <div>
        <h3 className="font-semibold text-gray-700 dark:text-gray-300">Company Overview</h3>
        <textarea
          name="overview"
          placeholder="Company Description"
          value={form.overview}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all resize-none"
          rows={4}
          required
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input
            type="url"
            name="website"
            placeholder="Company Website (https://...)"
            value={form.website}
            onChange={handleFormChange}
            className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          />
          <input
            type="text"
            name="headquarters"
            placeholder="Headquarters"
            value={form.headquarters}
            onChange={handleFormChange}
            className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          />
        </div>
      </div>

      {/* Job Description */}
      <div>
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mt-4">Job Description</h3>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all"
          required
        />
        <textarea
          name="jobOverview"
          placeholder="Job Overview"
          value={form.jobOverview}
          onChange={handleFormChange}
          className="border border-gray-300/40 dark:border-gray-700/30 p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all resize-none"
          rows={3}
          required
        />

        {/* Dynamic Responsibilities */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-gray-700 dark:text-gray-300">Duties & Responsibilities:</p>
            <button
              type="button"
              onClick={handleAddResponsibility}
              className="text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
              style={{ backgroundColor: '#0ea5e9' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
            >
              + Add Point
            </button>
          </div>

          <div className="space-y-2">
            {form.responsibilities.map((responsibility, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className="text-gray-500 dark:text-gray-400 font-semibold">{index + 1}.</span>
                <input
                  type="text"
                  value={responsibility}
                  onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                  placeholder={`Responsibility point ${index + 1}`}
                  className="border border-gray-300/40 dark:border-gray-700/30 p-2 rounded-lg flex-grow focus:ring-2 focus:ring-blue-500 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-gray-100"
                />
                {form.responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveResponsibility(index)}
                    className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white px-6 py-3 rounded-xl font-semibold w-full mt-6 transition-colors duration-200"
        style={{ backgroundColor: '#0ea5e9' }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0284c7'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#0ea5e9'}
      >
        Save Company
      </button>
    </motion.form>
  );
}
