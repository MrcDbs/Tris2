import React, { useState } from 'react';

import { InputLabel, Input, FormHelperText, Icon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GameGrid from './GameGrid';

import { DialogTitle, DialogContentText, Dialog, DialogContent, DialogActions, Button, TextField, Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Grid } from '@mui/material';

const RegistrationForm = (props) => {

    //const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState(props.playerChoice);

    const handleClose = () => {
        props.closeDialog();
    }

    const handlePlayer = (param) => {
        console.log('QUESTO `E IL NOME INSERITO ', param.target.value);
        console.log(param);
        setName(param.target.value);


    }

    const openGrid = () => {
        if (name === '' || symbol === 'n') {
            alert('FIELDS CANNOT BE EMPTY');
        } else {
            props.handleGridOpen();
            props.setPlayer({
                playerFullName: name,
                symbol: symbol,
                id: null
            })
            //props.setPlayer(props.player);
            props.closeDialog();
            window.scrollTo(<GameGrid />);
        }
    }

    const handleSymbol = (param) => {
        setSymbol(param.target.value);
        //props.setPlayer((props) => ({ ...props.player, [param.target.name]: param.target.value }));
    }

    const newForm = (param) => {
        return (
            <FormControl sx={{ marginTop: '15px', marginLeft: [param] }}>
                {/* <InputLabel>Full Name</InputLabel> */}
                {props.playerChoice === 'n' ?
                    <FormHelperText
                        sx={{ fontSize: '16px' }}
                        id="my-playerFullName-text">Enter your Full Name</FormHelperText> :
                    <FormHelperText
                        sx={{ fontSize: '33px' }}
                        id="my-playerFullName-text">Enter your Full Name</FormHelperText>
                }
                <Input fullWidth id="playerFullName"
                    aria-describedby="my-helper-text"
                    required
                    onChange={(event) => handlePlayer(event)} />
            </FormControl>
        )
    }
    const newBtn = () => {
        return (
            <FormControl>
                <br />
                <FormLabel id="demo-controlled-radio-buttons-group">Choose Symbol</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="symbol"
                    onChange={(event) => handleSymbol(event)}
                // value={value}
                // onChange={handleChange}
                >
                    <FormControlLabel id='symbol' value="x" control={<Radio required />} label={< CloseIcon style={{ fontSize: '50px' }} />} />
                    <FormControlLabel id='symbol' value="o" control={<Radio required />} label={<PanoramaFishEyeIcon style={{ fontSize: '50px' }} />} />
                </RadioGroup>
            </FormControl>
        )
    }




    return (
        <>
            {

                props.playerChoice === 'n' ? <Box style={{ borderRadius: '30px' }}>
                    <Dialog
                        open={props.open}
                        // onClose={handleClose}
                        fullWidth
                    >
                        <DialogTitle style={{ backgroundColor: '#bfbbbc', color: '#282830', textAlign: 'center', fontSize: '50px', fontFamily: 'Gill Sans' }}>PLAYER INFORMATIONS</DialogTitle>
                        <DialogContent style={{ backgroundColor: '#bfbbbc' }}>

                            {/* <DialogContentText style={{ color: 'white' }}>
                            Player's full name
                        </DialogContentText> */}
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    {
                                        // choosing 2 different form

                                        true ? newForm('10px') :
                                            <TextField
                                                sx={{ input: { color: 'white', borderColor: 'white' }, label: { color: 'white' }, margin: { color: 'white' } }}
                                                autoFocus
                                                margin="dense"
                                                id="playerFullName"
                                                label="Full Name"
                                                type="fullName"
                                                fullWidth
                                                variant="standard"
                                                required
                                            />
                                    }
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                    <Grid container columns={4}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2} sx={{ textAlign: 'center' }}>
                                            <PersonAddIcon sx={{ fontSize: 60, marginTop: '40px' }} />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    {newBtn()}
                                </Grid>
                            </Grid>
                        </DialogContent>

                        <DialogActions style={{ backgroundColor: '#bfbbbc' }}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}></Grid>
                                <Grid item xs={4}>
                                    <Button sx={{ color: '#282830', fontSize: '15px' }} onClick={handleClose}>Cancel</Button>
                                    <Button sx={{ color: '#282830', fontSize: '15px' }} onClick={openGrid}>START</Button>
                                </Grid>
                                <Grid item xs={4}></Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Box> :
                    // HERE STARTS THE SECOND FORM
                    <Box style={{ borderRadius: '30px' }}>
                        <Dialog
                            open={props.open}
                            // onClose={handleClose}
                            fullWidth
                        >
                            <DialogTitle style={{ backgroundColor: '#bfbbbc', color: '#282830', textAlign: 'center', fontSize: '50px', fontFamily: 'Gill Sans' }}>PLAYER INFORMATIONS</DialogTitle>
                            <DialogContent style={{ backgroundColor: '#bfbbbc' }}>

                                {/* <DialogContentText style={{ color: 'white' }}>
                            Player's full name
                        </DialogContentText> */}

                                {
                                    newForm('70px')
                                }
                                <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                                    {props.playerChoice === 'x' ? <CloseIcon style={{ fontSize: '80px' }} /> : <PanoramaFishEyeIcon style={{ fontSize: '80px' }} />}
                                    {/* <PersonAddIcon sx={{ fontSize: 60, marginTop: '40px' }} /> */}
                                </div>




                            </DialogContent>

                            <DialogActions style={{ backgroundColor: '#bfbbbc', paddingLeft: '40px' }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={4}>
                                        <Button sx={{ color: '#282830', fontSize: '15px' }} onClick={handleClose}>Cancel</Button>
                                        <Button sx={{ color: '#282830', fontSize: '15px' }} onClick={openGrid}>START</Button>
                                    </Grid>
                                    <Grid item xs={4}></Grid>
                                </Grid>
                            </DialogActions>
                        </Dialog>
                    </Box>
            }
        </>
    )
}

export default RegistrationForm;