import React from "react";
import "./style.css";

export default function UserList() {
  return (
    <>
      <div className="table">
        <div className="table_header">
          <p>Product Details</p>
          <div>
            {" "}
            <input placeholder="product" />{" "}
            <button className="add_new">+ Add New</button>{" "}
          </div>
        </div>
        <div className="table_section">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Product</th>
                <th>Name</th>
                <th>Email</th>
                <th>Owner</th>
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
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1evLZhNAss-m_fg9lBys8ULyW1WeOMTkz" />
                </td>
                <td>Laptop</td>
                <td>vejata@gmail.com</td>
                <td>Vejata</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=12Lof4FhSisnwoQCfpxDUTo4GVr5qWmxB " />
                </td>
                <td>Pencil</td>
                <td>shweta@gmail.com</td>
                <td>Shweta</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1mmfcfCVx6S89DCON0gvypzGWX7lwm3tP" />
                </td>
                <td>Jeans</td>
                <td>anjaligupta@gmail.com</td>
                <td>Anjali Gupta</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1FqkzzBCVdx39-OpB79cbzYty-k-P03y5" />
                </td>
                <td>Iphone</td>
                <td>adarsh@gmail.com</td>
                <td>Adarsh</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1U6xVbcyrPs7k2klDzkXMKA0TqZdFVBsU" />
                </td>
                <td>Pocket Golden Watch</td>
                <td>monti@gmail.com</td>
                <td>Monti</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=12JjdBJPUSmMTpXwwhyERt8doSQhmLHPX " />
                </td>
                <td>Pocket Watch</td>
                <td>naveen@gmail.com</td>
                <td>Naveen</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=12JjdBJPUSmMTpXwwhyERt8doSQhmLHPX " />
                </td>
                <td>Pocket Watch</td>
                <td>naveen@gmail.com</td>
                <td>Naveen</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=12JjdBJPUSmMTpXwwhyERt8doSQhmLHPX " />
                </td>
                <td>Pocket Watch</td>
                <td>naveen@gmail.com</td>
                <td>Naveen</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=12JjdBJPUSmMTpXwwhyERt8doSQhmLHPX " />
                </td>
                <td>Pocket Watch</td>
                <td>naveen@gmail.com</td>
                <td>Naveen</td>
                <td>
                  {" "}
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>{" "}
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
