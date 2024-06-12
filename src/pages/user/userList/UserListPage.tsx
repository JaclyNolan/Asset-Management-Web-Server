import { Box, IconButton, InputLabel, MenuItem, Pagination, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { User, UserType } from "../../../types/user";

interface UserListResponse {
    data: User[],
    totalCount: number,
    page: number,
    pageSize: number
}

const users = [
    { id: 'SD1901', name: 'An Nguyen Thuy', username: 'annt', joined: '20/06/2019', type: 'Staff' },
    // Add other users here...
];

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
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Select defaultValue="" displayEmpty>
                        <MenuItem value="">
                            <em>Type</em>
                        </MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Staff">Staff</MenuItem>
                    </Select>
                    <TextField variant="outlined" size="small" placeholder="Search" />
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Staff Code</TableCell>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Joined Date</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.joined}</TableCell>
                                    <TableCell>{user.type}</TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="center" p={2}>
                    <Pagination count={3} page={1} />
                </Box>
            </Box>

        </>
    )
}

export default UserListPage;