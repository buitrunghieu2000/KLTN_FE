import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import SelectBox from "../../components/SelectBox";
import useAuth from "../../store/auth";
import BoxUserSelect from "./BoxUser";
import "./style.css";

export default function UserList() {
  const LIMIT = 6;
  const [stateAuth, actionAuth] = useAuth();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [active, setActive] = useState("active");

  React.useEffect(() => {
    (async () => {
      await actionAuth.getAllUserAsync({ page: currentPage, limit: LIMIT });
    })();
  }, [currentPage, active]);

  const handleBlock = async (userId: string, email: string, status: string) => {
    await actionAuth.lockUser(userId, { email: email, status: status });
  };
  const handleUnblock = async (
    userId: string,
    email: string,
    status: string
  ) => {
    await actionAuth.lockUser(userId, { email: email, status: status });
  };

  const newList = stateAuth.userList.filter(
    (item: any, i: number) => item.status === active
  );
  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>User List</p>
          <BoxUserSelect setActive={setActive} />
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
              {newList.map((item, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        item.idUser.avatar === "nope"
                          ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                          : item.idUser.avatar
                      }
                    />
                  </td>
                  <td>{item.idUser.name}</td>
                  <td>{item.username}</td>
                  <td>{item.idUser.posts}</td>
                  <td>
                    {" "}
                    {item.status === "active" ? (
                      <button
                        onClick={() =>
                          handleBlock(item._id, item.idUser.email, "lock")
                        }
                      >
                        <i className="fa-solid fa-lock"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleUnblock(item._id, item.idUser.email, "active")
                        }
                      >
                        <i className="fa fa-unlock"></i>
                      </button>
                    )}
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
