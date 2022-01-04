import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
		sortable: true,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
    },
    {
        name: 'City',
        selector: row => row.city,
		sortable: true,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
    },
];

function UserAdmin() {
	const [user, setUser] = useState([]);

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


    return (
        <div>
			<DataTable columns={columns} data={user} pagination/>
        </div>
    )
}

export default UserAdmin
