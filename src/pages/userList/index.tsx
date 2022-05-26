import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import useAuth from "../../store/auth";
import "./style.css";

export default function UserList() {
  const LIMIT = 7;
  const [stateAuth, actionAuth] = useAuth();
  const [currentPage, setCurrentPage] = useState<number>(0);

  React.useEffect(() => {
    (async () => {
      await actionAuth.getAllUserAsync({ page: currentPage, limit: LIMIT });
    })();
  }, [currentPage]);

  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>User List</p>
          <div>
            {" "}
            <input placeholder="user" />{" "}
            <button className="add_new">+ Add New</button>{" "}
          </div>
        </div>
        <div className="table_section">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total Posts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stateAuth.userList.map((item, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/134454217_2852424525075613_6158247242724837492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8wqh7dJbgBYAX9hvE3r&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT-xjfQDcusaScpCfAw0htTEFku5kRedsE_bwByaQzNqNw&oe=62B3BF17" />
                  </td>
                  <td>{item.idUser.name}</td>
                  <td>{item.username}</td>
                  <td>{item.idUser.posts}</td>
                  <td>
                    {" "}
                    <button>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          limit={LIMIT}
          totalPost={stateAuth.totalUser}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
