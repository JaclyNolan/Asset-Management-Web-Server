import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { User, UserType } from "../../../types/user";

interface UserListResponse {
    data: User[],
    totalCount: number,
    page: number,
    pageSize: number
}

const UserListPage: FC = () => {
    const [userType, setUserType] = useState<UserType | "all">()

    const handleTypeFilter = (event: SelectChangeEvent) => {
        setUserType(event.target.value as UserType | "all")
    }
    return (
        <>
            <Helmet>
                <title>Manage User</title>
            </Helmet>
            <Box>
                <InputLabel>Type</InputLabel>
                <Select
                    value={userType}
                    defaultValue="all"
                    label="Type"
                    onChange={handleTypeFilter}
                    size="small"
                >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={UserType.Admin}>{UserType.Admin.toString()}</MenuItem>
                    <MenuItem value={UserType.Staff}>{UserType.Staff.toString()}</MenuItem>
                </Select>
            </Box>

        </>
    )
}

export default UserListPage;