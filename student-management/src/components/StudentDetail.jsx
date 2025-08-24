import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchStudent } from "../api";

export default function StudentDetail() {
    const { rollNo } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetchStudent(rollNo).then(resp => setStudent(resp.data.student));
    }, [rollNo]);

    if (!student) return <div className="container mt-4">Loading...</div>;

    return (
        <div className="container mt-4">
            <h2>Student Details</h2>
            <table className="table table-bordered">
                <tbody>
                    {Object.entries(student).map(([key, value]) => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/students/edit/${student.rollNo}`} className="btn btn-secondary">Edit</Link>
            <Link to="/" className="btn btn-link ms-2">Back to List</Link>
        </div>
    );
}
