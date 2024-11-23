import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import * as usersClient from "../../Accounts/client";
import * as enrollmentsClient from "../../Dashboard/client";
import { useEffect, useState } from "react";

export default function PeopleTable() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { cid } = useParams();
  // const { users, enrollments } = db;
  const [users, setUsers] = useState([]);
  // const enrollments = useSelector(
  //   (state: any) => state.enrollmentsReducer.enrollments
  // );
  // console.log("Enrollments:", enrollments);

  const [enrollments, setEnrollments] = useState([]);

  const [dataFetched, setDataFetched] = useState(false);

  const fetchUsers = async () => {
    const users = await usersClient.getAllUsers();
    // console.log("Users:", users);
    setUsers(users);
  };

  const fetchEnrollments = async () => {
    const enrollments = await enrollmentsClient.getAllEnrollments();
    // console.log("Enrollments:", enrollments);
    setEnrollments(enrollments);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchUsers(), fetchEnrollments()]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setDataFetched(true);
      }
    };

    fetchData();
  }, []);

  const [usernameToAdd, setUsernameToAdd] = useState("");

  const handleAddUser = async () => {
    const user: any = users.find((usr: any) => usr.username === usernameToAdd);
    if (!user) {
      console.error("User not found");
      return;
    }

    const enrollment = {
      username: user.username,
      courseId: cid,
    };

    console.log("Enrollment:", enrollment);

    try {
      await enrollmentsClient.enrollUserWithUsername(enrollment);
      console.log("User enrolled successfully");
      await fetchEnrollments();
      await fetchUsers();
    } catch (error) {
      console.error("Error enrolling user:", error);
    }
  };

  const handleUnenrollUser = async (userId: any) => {
    try {
      const enrollment = {
        user: userId,
        course: cid,
      };
      await enrollmentsClient.unenrollUser(enrollment);
      console.log("User unenrolled successfully");
      await fetchEnrollments();
      await fetchUsers();
    } catch (error) {
      console.error("Error unenrolling user:", error);
    }
  };

  return (
    <div id="wd-people-table">
      {/* add button for faculty */}
      {currentUser.role === "FACULTY" && (
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5> </h5>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username you wish to add"
            onChange={(e) => setUsernameToAdd(e.target.value)}
          />
          <button
            className="btn btn-danger"
            onClick={() => {
              // Handle "Add" button click logic here
              console.log("Add button clicked");
              handleAddUser();
            }}
          >
            Add
          </button>
        </div>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {dataFetched &&
            users
              .filter((usr: any) =>
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === usr._id && enrollment.course === cid
                )
              )
              .map((user: any) => (
                <tr key={user._id}>
                  <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </td>
                  <td className="wd-login-id">{user.username}</td>
                  <td className="wd-section">{user.section}</td>
                  <td className="wd-role">{user.role}</td>
                  <td className="wd-last-activity">{user.lastActivity}</td>
                  <td className="wd-total-activity">{user.totalActivity}</td>
                  {/* a delete button, visible only to faculty */}
                  {currentUser.role === "FACULTY" && (
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleUnenrollUser(user._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
