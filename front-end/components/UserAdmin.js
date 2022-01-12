import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillFolderAdd, AiFillTool } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import DataTable from "react-data-table-component";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

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
        <div>
          <button
            onClick={() => {
              handleEdit(row);
            }}
            style={{ margin: "0 10px 0 0" }}
          >
            <AiFillTool />
          </button>
          <button onClick={() => deleteUser(row._id)}>
            <AiFillDelete />
          </button>
        </div>
      ),
    },
  ];

  const [user, setUser] = useState([]);

  const [state, setState] = useState({
    name: "",
    gender: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    roles: "",
    state: "",
  });

  const handleEdit = (row) => {
    onOpen();
    console.log(row);
    setState(row);
  };

  const handleAdd = () => {
    onOpen();
    setState({
      name: "",
      gender: "",
      city: "",
      phone: "",
      email: "",
      password: "",
      roles: "",
      state: "",
    });
  };

  const handleOnSubmit = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        state
      );
      if (res.data.message == "Success") {
        router.reload();
      }
    } catch (error) {
      console.log("Failed to fetch exam:", error);
    }
  };

  const handleOnSubmitEdit = async () => {
    try {
      const token = localStorage.getItem("REFRESH_TOKEN");
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${state._id}/update`,
        method: "PUT",
        headers: {
          access_token: token,
        },
        data: state,
      }).then(res => res);
      if (res.data.message == "Success") {
        router.reload();
      }
    } catch (error) {
      console.log("Failed to fetch exam:", error);
    }
  };

  const handleOnChange =
    (name) =>
    ({ target }) => {
      setState((s) => ({
        ...s,
        [name]: target.value,
      }));
    };

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
      if (res.data.message == "Success")
        setUser([...user.slice(0, index), ...user.slice(index + 1)]);
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

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Button
        onClick={handleAdd}
        leftIcon={<AiFillFolderAdd />}
        colorScheme="blue"
      >
        Add user
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={handleOnChange("name")}
                value={state.name}
                placeholder="Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input
                onChange={handleOnChange("gender")}
                value={state.gender}
                placeholder="Gender"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                onChange={handleOnChange("city")}
                value={state.city}
                placeholder="City"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                onChange={handleOnChange("phone")}
                value={state.phone}
                placeholder="Phone"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleOnChange("email")}
                value={state.email}
                placeholder="Email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleOnChange("password")}
                value={state.password}
                placeholder="Password"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Roles</FormLabel>
              <Input
                onChange={handleOnChange("roles")}
                value={state.roles}
                placeholder="Roles"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input
                onChange={handleOnChange("state")}
                value={state.state}
                placeholder="State"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {state._id ? (
              <Button colorScheme="blue" mr={3} onClick={handleOnSubmitEdit}>
                Change
              </Button>
            ) : (
              <Button colorScheme="blue" mr={3} onClick={handleOnSubmit}>
                Submit
              </Button>
            )}

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
