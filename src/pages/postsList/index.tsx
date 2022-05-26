import React, { useState } from "react";
import BoxShowImage from "../../components/BoxShowImage";
import Pagination from "../../components/Pagination";
import SelectBox from "../../components/SelectBox";
import { ENUM_POST_STATUS } from "../../constant/base.constant";
import usePost from "../../store/post";
import "./style.css";

const LIMIT = 6;

export default function PostList() {
  const [statePost, actionPost] = usePost();
  const [pickedImages, setPickedImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [statusPost, setStatusPost] = useState(
    ENUM_POST_STATUS.WAIT_TO_CONFIRM
  );

  React.useEffect(() => {
    (async () => {
      await actionPost.getAllPostAsync({
        status: statusPost,
        page: currentPage,
        limit: LIMIT,
      });
    })();
  }, [currentPage, statusPost]);

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
  const handleLockPost = (postId: string) => {
    (async () => {
      await actionPost.updatePostStatusAsync(postId, ENUM_POST_STATUS.CANCELED);
    })();
  };

  console.log("status", statusPost);
  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>All Posts</p>
          <div>
            {" "}
            <SelectBox setStatusPost={setStatusPost} />
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
                    <div onClick={() => setPickedImages(item.image)}>
                      <img src={item.image[0]} />
                    </div>
                  </td>
                  <td>{item.nameOfPoster}</td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>
                    {statusPost === 0 ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <button>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          onClick={() => {
                            handleLockPost(item._id);
                          }}
                        >
                          <i className="fa-solid fa-lock"></i>
                        </button>
                      </>
                    )}
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
      {pickedImages.length > 0 && (
        <BoxShowImage images={pickedImages} setImages={setPickedImages} />
      )}
    </>
  );
}
