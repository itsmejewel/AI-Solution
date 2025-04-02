import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import {  collection,  getDocs,  updateDoc,  deleteDoc,  doc,  addDoc,} from "firebase/firestore";
import emailjs from "emailjs-com";
import {  PieChart,  Pie,  Cell,  Tooltip,  ResponsiveContainer,  BarChart,  Bar,  XAxis,  YAxis,  Legend,} from "recharts";
import { CSVLink } from "react-csv";
import { Trash2, Edit } from "lucide-react";
import Navbar from "../components/navbar";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showDuplicateEmails, setShowDuplicateEmails] = useState(false);
  // sidebar
  const [activeTab, setActiveTab] = useState("Inquiries");

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Company", key: "company" },
    { label: "Job", key: "job" },
    { label: "Job Details", key: "jobDetails" },
  ];

  useEffect(() => {
    const fetchInquiries = async () => {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        status: doc.data().status || "Unresolved",
      }));
      setInquiries(data);
      filterInquiries(data, searchTerm, filterStatus);
      processCharts(data);
    };
    fetchInquiries();
  }, []);

  useEffect(() => {
    filterInquiries(inquiries, searchTerm, filterStatus);
  }, [filterStatus, searchTerm, showDuplicateEmails]);

  const processCharts = (data) => {
    const industryCount = {};
    const jobCount = {};
    let resolvedCount = 0,
      unresolvedCount = 0;

    data.forEach((item) => {
      industryCount[item.company] = (industryCount[item.company] || 0) + 1;
      jobCount[item.job] = (jobCount[item.job] || 0) + 1;
      if (item.status === "Resolved") resolvedCount++;
      else unresolvedCount++;
    });

    setIndustryData(
      Object.keys(industryCount).map((key, index) => ({
        name: key,
        value: industryCount[key],
        color: COLORS[index % COLORS.length],
      }))
    );
    setJobData(
      Object.keys(jobCount).map((key, index) => ({
        name: key,
        value: jobCount[key],
        color: COLORS[index % COLORS.length],
      }))
    );
    setStatusData([
      { name: "Resolved", value: resolvedCount },
      { name: "Unresolved", value: unresolvedCount },
    ]);
  };

  const filterInquiries = (data, search, status) => {
    let filtered = data;
    if (search) {
      filtered = filtered.filter((inquiry) =>
        [
          inquiry.name,
          inquiry.email,
          inquiry.company,
          inquiry.job,
          inquiry.jobDetails,
        ]
          .filter(Boolean)
          .some((field) =>
            field.toString().toLowerCase().includes(search.toLowerCase())
          )
      );
    }
    if (status !== "All") {
      filtered = filtered.filter((inquiry) => inquiry.status === status);
    }
    if (showDuplicateEmails) {
      const emailCounts = {};
      filtered.forEach((inq) => {
        emailCounts[inq.email] = (emailCounts[inq.email] || 0) + 1;
      });
      filtered = filtered.filter((inq) => emailCounts[inq.email] > 1);
    }
    setFilteredInquiries(filtered);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      await deleteDoc(doc(db, "contacts", id));
      const updatedInquiries = inquiries.filter((inq) => inq.id !== id);
      setInquiries(updatedInquiries);
      filterInquiries(updatedInquiries, searchTerm, filterStatus);
      processCharts(updatedInquiries);
    }
  };

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleMarkAsResolved = async (id) => {
    await updateDoc(doc(db, "contacts", id), { status: "Resolved" });
    const updatedInquiries = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status: "Resolved" } : inq
    );
    setInquiries(updatedInquiries);
    filterInquiries(updatedInquiries, searchTerm, filterStatus);
    processCharts(updatedInquiries);
  };

  const handleMarkAsUnresolved = async (id) => {
    await updateDoc(doc(db, "contacts", id), { status: "Unresolved" });
    const updatedInquiries = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status: "Unresolved" } : inq
    );
    setInquiries(updatedInquiries);
    filterInquiries(updatedInquiries, searchTerm, filterStatus);
    processCharts(updatedInquiries);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar: comment on mobile */}
        <div className="w-1/5 bg-transparent border-r-[1px] border-[#1f1f1f] text-white h-screen p-4">
          <h2 className="text-[1.5em] font-semibold mb-4 uppercase text-space text-[#1f1f1f]">
            Admin Menu
          </h2>
          <ul>
            <li
              className={`cursor-pointer mb-2 p-2 text-space text-[#1f1f1f] uppercase ${
                activeTab === "Inquiries"
                  ? "bg-transparent border border-[#1f1f1f]"
                  : ""
              }`}
              onClick={() => setActiveTab("Inquiries")}
            >
              Inquiries
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-10 overflow-auto">
            <div>
              <h2 className="text-[2em] font-normal text-pixel">Inquiries</h2>
              <span className="text-lg font-bold text-[#1f1f1f]">
                Total Inquiries: {filteredInquiries.length}
              </span>
              <div className="p-10">
                <div className="grid grid-cols-2 gap-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={industryData}
                        dataKey="value"
                        // 30 on mobile 
                        outerRadius={80}
                        label
                      >
                        {industryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                    <p className="text-center text-space uppercase">
                      Industry Distribution
                    </p>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={jobData}
                        dataKey="value"
                        // 30 on mobile
                        outerRadius={80}
                        label
                      >
                        {jobData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                    <p className="text-center text-space uppercase">
                      Job Distribution
                    </p>
                  </ResponsiveContainer>
                </div>
                <br />
                <br /><br /><br />

                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={statusData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                  <p className="text-center text-space uppercase">
                    Inquiry Status
                  </p>
                </ResponsiveContainer>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border p-2 mb-4 w-full"
                />
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setFilterStatus("All")}
                    className="p-2 border"
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterStatus("Resolved")}
                    className="p-2 border"
                  >
                    Resolved
                  </button>
                  <button
                    onClick={() => setFilterStatus("Unresolved")}
                    className="p-2 border"
                  >
                    Unresolved
                  </button>
                  <button
                    onClick={() => setShowDuplicateEmails(!showDuplicateEmails)}
                    className="p-2 border"
                  >
                    Filter Duplicate Emails
                  </button>
                  <CSVLink
                    data={filteredInquiries}
                    headers={headers}
                    filename="inquiries.csv"
                    className="bg-transparent text-[#1f1f1f] px-4 py-2 underline"
                  >
                    Export CSV
                  </CSVLink>
                </div>
                <table className="w-full border mt-4 border-collapse">
                  <thead>
                    <tr className="bg-gray-200 border-b">
                      <th className="border p-2">Name</th>
                      <th className="border p-2">Email</th>
                      <th className="border p-2">Company</th>
                      <th className="border p-2">Job</th>
                      <th className="border p-2">Job Details</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="border-b">
                        <td className="border p-2">{inq.name}</td>
                        <td className="border p-2">{inq.email}</td>
                        <td className="border p-2">{inq.company}</td>
                        <td className="border p-2">{inq.job || "N/A"}</td>
                        <td className="border p-2">
                          {inq.jobDetails || "N/A"}
                        </td>
                        <td className="border p-2">{inq.status}</td>
                        <td className="border p-2">
                          <button
                            onClick={() => handleReply(inq.email)}
                            className="text-blue-500 p-1 mr-2"
                          >
                            <Edit size={20} />
                          </button>
                          <button
                            onClick={() => handleDelete(inq.id)}
                            className="text-red-500 p-1 mr-2"
                          >
                            <Trash2 size={20} />
                          </button>
                          <button
                            onClick={() => handleMarkAsResolved(inq.id)}
                            className="bg-green-500 text-white uppercase text-space p-1 mr-2 hover:bg-green-700 transition"
                          >
                            Resolved
                          </button>
                          <button
                            onClick={() => handleMarkAsUnresolved(inq.id)}
                            className="bg-yellow-500 text-white uppercase text-space p-1 hover:bg-yellow-700 transition"
                          >
                            Unresolved
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>          
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
