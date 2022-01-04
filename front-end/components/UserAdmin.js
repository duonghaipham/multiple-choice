import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import DataTable from "react-data-table-component";

const style1 = {
  height: "32px",
  width: "200px",
  "border-radius": "3px",
  "border-top-left-radius": "5px",
  "border-bottom-left-radius": "5px",
  "border-top-right-radius": "0",
  "border-bottom-right-radius": "0",
  border: "1px solid #e5e5e5",
  padding: "0 32px 0 16px",
};
const style2 = {
  "border-top-left-radius": "0",
  "border-bottom-left-radius": "0",
  "background-color": "gray",
  "border-top-right-radius": "5px",
  "border-bottom-right-radius": "5px",
  height: "32px",
  width: "32px",
  "text-align": "center",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
};

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      style={style1}
      onChange={onFilter}
    />
    <button type="button" onClick={onClear} style={style2}>
      X
    </button>
  </>
);

function UserAdmin() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "action",
      button: true,
      cell: (row) => (
        <button onClick={() => deleteUser(row._id)}>
          <AiFillDelete />
        </button>
      ),
    },
  ];

  const [user, setUser] = useState([]);

  const deleteUser = async (userId) => {
	const index = user.findIndex((e) => e._id == userId);
	try {
	  const url = `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${userId}/delete`;
	  const token = localStorage.getItem("REFRESH_TOKEN");
	  const res = await axios.delete(url, {
		headers: {
		  access_token: token,
		},
	  });
	  if(res.data.message == "Success") setUser([...user.slice(0, index), ...user.slice(index + 1)]);
	} catch (error) {
	  console.log("Failed to fetch exam list:", error);
	}
  };

  const router = useRouter();

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/admin/users`;
        const token = localStorage.getItem("REFRESH_TOKEN");
        const res = await axios.get(url, {
          headers: {
            access_token: token,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.log("Failed to fetch exam list:", error);
      }
    };
    fetchUserList();
  }, [router.query.name]);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = user.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
}

export default UserAdmin;
