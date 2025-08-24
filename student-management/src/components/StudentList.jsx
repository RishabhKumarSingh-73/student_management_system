import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents, deleteStudent } from '../api';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const loadStudents = async (pageNo = 0) => {
    try {
      const resp = await fetchStudents(pageNo, 10);
      setStudents(resp.data.students);
      setTotal(resp.data.total);
      setPage(pageNo);
    } catch (e) {
      alert("Failed to fetch students");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (rollNo) => {
    if (confirm('Delete this student?')) {
      await deleteStudent(rollNo);
      loadStudents(page);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Students</h2>
        <Link to="/students/add" className="btn btn-primary">Add Student</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Roll No</th><th>Name</th><th>Semester</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(stu => (
            <tr key={stu.rollNo}>
              <td>
                <Link to={`/students/${stu.rollNo}`}>{stu.rollNo}</Link>
              </td>
              <td>{stu.name}</td>
              <td>{stu.currentSemester}</td>
              <td>{stu.email}</td>
              <td>
                <Link to={`/students/edit/${stu.rollNo}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(stu.rollNo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(total / 10) }).map((_, i) => (
            <li key={i} className={`page-item ${i === page ? 'active' : ''}`}>
              <button className="page-link" onClick={() => loadStudents(i)}>{i + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
