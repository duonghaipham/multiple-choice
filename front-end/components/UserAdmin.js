import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function UserAdmin() {
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

                console.log(res);
			} catch (error) {
				console.log("Failed to fetch exam list:", error);
			}
		};
		fetchUserList();
	}, [router.query.name]);

    return (
        <div>
            User
        </div>
    )
}

export default UserAdmin
