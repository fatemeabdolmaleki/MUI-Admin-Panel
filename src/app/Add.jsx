"use client"
import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

function Add() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign={'center'}>
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar src='' />
                        <Typography fontWeight={500} variant='span'>Fateme</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="what's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={0}>
                        <EmojiEmotions />
                        <Image />
                        <VideoCameraBack />
                        <PersonAdd />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
                        <Button>post</Button>
                        <Button sx={{width:'100px'}}> <DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add