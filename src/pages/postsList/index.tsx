import React from "react";
import "./style.css";

export default function UserList() {
  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>Posts Details</p>
          <div>
            {" "}
            <input placeholder="search" />{" "}
            <button className="add_new">+ Add New</button>{" "}
          </div>
        </div>
        <div className="table_section">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Avatar</th>
                <th>Email</th>
                <th>Title</th>
                <th>Des</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1oL5yePDRKaJ3rwr2_DedGETXfqtF_gv4" />
                </td>
                <td>Camera</td>
                <td>rakhigupta@gmail.com</td>
                <td>Rakhi Gupta</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-circle-check"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div>
            <i className="fa-solid fa-angles-left"></i>
          </div>
          <div>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div>1</div>
          <div>2</div>
          <div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div>
            <i className="fa-solid fa-angles-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
