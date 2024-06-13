import { Box, Button, IconButton, InputLabel, MenuItem, Modal, Pagination, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { User, UserType } from "../../../types/user";
import { Edit, HighlightOff } from "@mui/icons-material";
import { CustomTableHead, CustomTableCell, StyledTableCell } from "../../../components/table";
import { Order, TableHeadInfo } from "../../../components/table/CustomTableHead";
import { NoStyleLink } from "../../../components/noStyleLink";
import { routeNames } from "../../../constants/routeName";
import { CustomPopover } from "../../../components/popover";

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
    const [userType, setUserType] = useState<UserType | "all">("all");
    const [search, setSearch] = useState<string>("");
    const [order, setOrder] = useState<Order>("desc");
    const [orderBy, setOrderBy] = useState<string>(TABLE_HEAD[0].id);
    const [rowAnchorEl, setRowAnchorEl] = useState<HTMLElement | null>(null);
    const [deleteAnchorEl, setDeleteAnchorEl] = useState<HTMLElement | null>(null);

    const handleTypeFilter = (event: SelectChangeEvent) => {
        setUserType(event.target.value as UserType | "all");
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onRequestSort = (property: string) => {
        if (orderBy === property) {
            setOrder(order === "asc" ? "desc" : "asc")
            return
        }
        setOrderBy(property);
        setOrder("desc");
    }

    const handleRowClick = (event: React.MouseEvent<HTMLElement>) => {
        setRowAnchorEl(event.currentTarget);
    };

    const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
        setDeleteAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setRowAnchorEl(null);
        setDeleteAnchorEl(null);
    };
    return (
        <>
            <Helmet>
                <title>Manage User</title>
            </Helmet>
            <RootBox>
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Select size="small" value={userType} onChange={handleTypeFilter}>
                        <MenuItem value="all">
                            <em>Type</em>
                        </MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Staff">Staff</MenuItem>
                    </Select>
                    <Box>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <NoStyleLink to={routeNames.user.create}>
                            <Button sx={{ marginLeft: "1rem" }} variant="contained" color="primary">
                                Create New User
                            </Button>
                        </NoStyleLink>
                    </Box>
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
                                <TableRow
                                    key={user.id}

                                >
                                    <CustomTableCell onClick={handleRowClick}>{user.id}</CustomTableCell>
                                    <CustomTableCell onClick={handleRowClick}>{user.name}</CustomTableCell>
                                    <CustomTableCell onClick={handleRowClick}>{user.username}</CustomTableCell>
                                    <CustomTableCell onClick={handleRowClick}>{user.joined}</CustomTableCell>
                                    <CustomTableCell onClick={handleRowClick}>{user.type}</CustomTableCell>
                                    <StyledTableCell align="center">
                                        <IconButton>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={handleDeleteClick}>
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
            <CustomPopover
                elAnchor={rowAnchorEl}
                open={Boolean(rowAnchorEl)}
                handleClose={handleClosePopover}
                renderTitle={() => <span>Detailed User Information</span>}
                renderDescription={() => <span>More details about the user...</span>}
                boxProps={{ sx: { minWidth: '20rem' } }}
            />
            <CustomPopover
                elAnchor={deleteAnchorEl}
                open={Boolean(deleteAnchorEl)}
                handleClose={handleClosePopover}
                renderTitle={() => <span>Are you sure?</span>}
                renderDescription={() => <span>Delete this user?</span>}
                boxProps={{ sx: { minWidth: '20rem' } }}
            >

            </CustomPopover>
        </>
    )
}

export default UserListPage;