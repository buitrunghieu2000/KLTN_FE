import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { ENUM_POST_STATUS } from "../../constant/base.constant";
import usePost from "../../store/post";
import "./style.css";

const LIMIT = 10;

export default function UserList() {
  const [statePost, actionPost] = usePost();
  const [currentPage, setCurrentPage] = useState<number>(0);

  React.useEffect(() => {
    (async () => {
      await actionPost.getAllPostAsync({
        status: ENUM_POST_STATUS.WAIT_TO_CONFIRM,
        page: currentPage,
        limit: LIMIT,
      });
    })();
  }, [currentPage]);

  const handleRefusedPost = (postId: string) => {
    (async () => {
      await actionPost.updatePostStatusAsync(
        postId,
        ENUM_POST_STATUS.REFUSE_CONFIRM
      );
    })();
  };

  const handleAcceptPost = (postId: string) => {
    (async () => {
      await actionPost.updatePostStatusAsync(
        postId,
        ENUM_POST_STATUS.DISPLAYING
      );
    })();
  };

  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>All Posts</p>
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
                <th>Image</th>
                <th>Poster</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {statePost.postList.map((item, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image[0]} />
                  </td>
                  <td>{item.nameOfPoster}</td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>
                    {" "}
                    <button>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => {
                        handleAcceptPost(item._id);
                      }}
                    >
                      <i className="fa-solid fa-circle-check"></i>
                    </button>
                    <button
                      onClick={() => {
                        handleRefusedPost(item._id);
                      }}
                    >
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
          totalPost={statePost.totalPost}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
