import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';
import { Box, BoxProps, Divider, IconButton, Popover, Popper, styled, Typography } from "@mui/material";
import { FC, ReactNode, useState } from "react";

interface PopoverProps {
    elAnchor: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
    renderTitle: () => ReactNode;
    renderDescription: () => ReactNode;
    boxProps?: BoxProps;
}

const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.lightGrey.main,
    color: theme.palette.primary.main,
    alignItems: 'center',
    padding: '0 1rem 0 1rem'
}))

const ContentBox = styled(Box)(({ theme }) => ({
    padding: '1rem 1rem 1rem 1rem',
    backgroundColor: theme.palette.background.paper,
}));

const CustomPopover: FC<PopoverProps> = ({ elAnchor, open, handleClose, renderTitle, renderDescription, boxProps, ...props }) => {
    return (
        <Popover
            open={open}
            anchorEl={elAnchor}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            {...props}
        >
            <Box {...boxProps}>
                <TitleBox>
                    <Typography id="modal-title" variant="h6">
                        {renderTitle()}
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CancelPresentationRoundedIcon color='primary'/>
                    </IconButton>
                </TitleBox>
                <Divider/>
                <ContentBox>
                    {renderDescription()}
                </ContentBox>
            </Box>
        </Popover>
    )
}

export default CustomPopover