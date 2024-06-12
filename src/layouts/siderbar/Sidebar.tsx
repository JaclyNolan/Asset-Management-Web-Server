import { List, ListItem, ListItemText, styled } from '@mui/material';
import { FC, useState } from 'react';

const StyledListItem = styled(ListItem)<{ active?: boolean }>(({ theme, active }) => ({
    backgroundColor: active ? theme.palette.primary.main : theme.palette.lightGrey.main,
    color: active ? 'white' : 'black',
    '&:hover': {
        backgroundColor: active ? '#d50000' : '#eff1f5',
    },
    marginTop: '5px'
}));

const StyledList = styled(List) (() => ({
    minWidth: '15rem',
}))

const Sidebar: FC = () => {
    const [activeItem, setActiveItem] = useState('Manage User');

    const menuItems = [
        { text: 'Home' },
        { text: 'Manage User' },
        { text: 'Manage Asset' },
        { text: 'Manage Assignment' },
        { text: 'Request for Returning' },
        { text: 'Report' },
    ];

    const handleItemClick = (text: string) => {
        setActiveItem(text);
    };

    return (
        <StyledList>
            {menuItems.map((item, index) => (
                <StyledListItem
                    key={index}
                    active={activeItem === item.text}
                    onClick={() => handleItemClick(item.text)}
                >
                    <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                            fontWeight: 'bold' ,
                        }} />
                </StyledListItem>
            ))}
        </StyledList>
    );
};

export default Sidebar;
