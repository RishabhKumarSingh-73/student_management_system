import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createStudent, fetchStudent, updateStudent } from "../api";

const initialState = {
    rollNo: "",
    name: "",
    address: "",
    dob: "",
    cgpa: "",
    currentSemester: "",
    phoneNo: "",
    email: "",
    sslcPercentage: "",
    hscPercentage: ""
};

export default function StudentForm() {
    const [student, setStudent] = useState(initialState);
    const { rollNo } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (rollNo) {
            fetchStudent(rollNo).then((resp) => {
                // DOB might come as a timestamp, convert to yyyy-mm-dd string if needed
                const s = resp.data.student;
                s.dob = s.dob ? new Date(s.dob).toISOString().split("T")[0] : "";
                setStudent(s);
            });
        }
    }, [rollNo]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For numeric inputs, convert to number type if needed
        if (
            ["rollNo", "cgpa", "currentSemester", "phoneNo", "sslcPercentage", "hscPercentage"].includes(name)
        ) {
            setStudent({ ...student, [name]: value });
        } else {
            setStudent({ ...student, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Optional: parse numbers and validations here
        const payload = {
            ...student,
            rollNo: Number(student.rollNo),
            cgpa: Number(student.cgpa),
            currentSemester: Number(student.currentSemester),
            phoneNo: Number(student.phoneNo),
            sslcPercentage: Number(student.sslcPercentage),
            hscPercentage: Number(student.hscPercentage),
            dob: student.dob ? student.dob : null
        };

        if (rollNo) {
            await updateStudent(rollNo, payload);
        } else {
            await createStudent(payload);
        }
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <h2>{rollNo ? "Edit Student" : "Add Student"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {/* Roll No */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Roll No</label>
                        <input
                            type="number"
                            className="form-control"
                            name="rollNo"
                            value={student.rollNo}
                            onChange={handleChange}
                            required={!rollNo}
                            disabled={!!rollNo}
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={student.address}
                            onChange={handleChange}
                        />
                    </div>

                    {/* DOB */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={student.dob}
                            onChange={handleChange}
                        />
                    </div>

                    {/* CGPA */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">CGPA</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            name="cgpa"
                            value={student.cgpa}
                            onChange={handleChange}
                            min="0"
                            max="10"
                        />
                    </div>

                    {/* Current Semester */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Current Semester</label>
                        <input
                            type="number"
                            className="form-control"
                            name="currentSemester"
                            value={student.currentSemester}
                            onChange={handleChange}
                            min="1"
                            max="12"
                        />
                    </div>

                    {/* Phone No */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phoneNo"
                            value={student.phoneNo}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* SSLC Percentage */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">SSLC Percentage</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            name="sslcPercentage"
                            value={student.sslcPercentage}
                            onChange={handleChange}
                            min="0"
                            max="100"
                        />
                    </div>

                    {/* HSC Percentage */}
                    <div className="mb-3 col-md-6">
                        <label className="form-label">HSC Percentage</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            name="hscPercentage"
                            value={student.hscPercentage}
                            onChange={handleChange}
                            min="0"
                            max="100"
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-success">{rollNo ? "Update" : "Add"}</button>
            </form>
        </div>
    );
}
