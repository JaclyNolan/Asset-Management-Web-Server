import { Box, IconButton, InputLabel, MenuItem, Pagination, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { User, UserType } from "../../../types/user";
import { Edit, HighlightOff } from "@mui/icons-material";
import { CustomTableHead, CustomTableCell, StyledTableCell } from "../../../components/table";
import { Order, TableHeadInfo } from "../../../components/table/CustomTableHead";

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

const RootBox = styled(Box)(() => ({
    minWidth: '30rem',
    width: '100%',
}))

const StyledTableContainer = styled(TableContainer)(() => ({
    border: '0px',
}))


const TABLE_HEAD: TableHeadInfo[] = [
    {
        id: "code",
        label: "Staff Code",
        sortable: true
    },
    {
        id: "fullName",
        label: "Full Name",
        sortable: true
    },
    {
        id: "username",
        label: "Username",
    },
    {
        id: "joinedDate",
        label: "Joined Date",
        sortable: true
    },
    {
        id: "type",
        label: "Type",
        sortable: true
    },
]

const UserListPage: FC = () => {
    const [userType, setUserType] = useState<UserType | "all">()
    const [order, setOrder] = useState<Order>('desc');
    const [orderBy, setOrderBy] = useState<string>(TABLE_HEAD[0].id);

    const handleTypeFilter = (event: SelectChangeEvent) => {
        setUserType(event.target.value as UserType | "all")
    }

    const onRequestSort = (property: string) => {
        if (orderBy === property) {
            setOrder(order === "asc" ? "desc" : "asc")
            return
        }
        setOrderBy(property);
        setOrder("desc");
    }
    return (
        <>
            <Helmet>
                <title>Manage User</title>
            </Helmet>
            <RootBox>
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
                <TableContainer>
                    <Table>
                        <CustomTableHead
                            columns={TABLE_HEAD}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={onRequestSort} />
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <CustomTableCell>{user.id}</CustomTableCell>
                                    <CustomTableCell>{user.name}</CustomTableCell>
                                    <CustomTableCell>{user.username}</CustomTableCell>
                                    <CustomTableCell>{user.joined}</CustomTableCell>
                                    <CustomTableCell>{user.type}</CustomTableCell>
                                    <StyledTableCell align="center">
                                        <IconButton>
                                            <Edit />
                                        </IconButton>
                                        <IconButton>
                                            <HighlightOff />
                                        </IconButton>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="center" p={2}>
                    <Pagination count={3} page={1} />
                </Box>
            </RootBox>

        </>
    )
}

export default UserListPage;