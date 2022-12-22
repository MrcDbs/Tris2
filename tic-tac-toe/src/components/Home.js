import React, { useEffect, useState } from 'react';
import GameGrid from './GameGrid';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { Grid, Box } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import { borders } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const Home = (props) => {
    const [showBoard, setShowBoard] = useState(false);
    const [isOverPlay, setIsOverPlay] = useState(false);
    const [isOverIcon, setIsOverIcon] = useState(false);
    const [isOverX, setIsOverX] = useState(false);
    const [isOverO, setIsOverO] = useState(false);
    const [showPlayGrid, setShowPlayGrid] = useState(false);
    const [playerCoice, setPlayerChoice] = useState('n');
    const [player, setPlayer] = useState({
        playerFullName: null,
        symbol: null,
        id: null
    });



    useEffect(() => {
        console.log('ENTRO NELLO USE EFFECT HOME');
        console.log(player);
    }, [player])

    const handleOverIcon = (param) => {
        param === 'O' ? setIsOverIcon(true) : setIsOverIcon(false);
    }

    const handleOverX = (param) => {
        param === 'x' ? setIsOverX(true) : setIsOverX(false);
    }
    const handleOverO = (param) => {
        param === 'o' ? setIsOverO(true) : setIsOverO(false);
    }
    const showGrid = (param) => {
        console.log('ENTRO NEL CLICK')
        setPlayerChoice(param);
        setShowBoard(true);
    }
    const handlePlayGridOpen = () => {
        setShowPlayGrid(true);
    }

    const handlePlayGridClose = () => {
        if (showPlayGrid) {
            if (window.confirm('Sicuro di voler abbandonare la partita?')) {
                setShowPlayGrid(false);
            }
        }
        //  else {
        //     setShowPlayGrid(false);
        // }

    }

    const handleOver = (param) => {
        param === 'O' ? setIsOverPlay(true) : setIsOverPlay(false);
    }

    const handleRegClose = () => {
        setShowBoard(false);
    }

    return (
        <>
            <Box >
                {!showPlayGrid ? <Box >
                    <Grid container spacing={3}>
                        <Grid item xs={4} >
                            <h1 style={{ fontSize: '60px', color: 'white', textAlign: 'center' }}>Tic</h1>
                        </Grid>
                        <Grid item xs={4} >
                            <h1 style={{ fontSize: '60px', color: 'white', textAlign: 'center' }}>Tac</h1>
                        </Grid>
                        <Grid item xs={4} >
                            <h1 style={{ fontSize: '60px', color: 'white', textAlign: 'center' }}>Toe</h1>
                        </Grid>
                    </Grid>
                </Box> : <></>}

                <Box>
                    <Grid container spacing={3} style={{ marginBottom: '2px' }}>
                        <Grid item xs={4} style={{ border: '1px solid white' }}></Grid>
                        {
                            isOverIcon ?
                                <Grid item xs={4} style={{ border: '1px solid white', backgroundColor: '#4e4e59', cursor: 'pointer' }} onMouseOver={(event) => { handleOverIcon('O') }} onMouseLeave={(event) => { handleOverIcon('') }} onClick={() => { handlePlayGridClose() }}>
                                    <Grid container columns={4}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>

                                            <Grid3x3Icon style={{ fontSize: '200px', color: 'white' }} />


                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid> : <Grid item xs={4} style={{ border: '1px solid white', cursor: 'pointer' }} onMouseOver={(event) => { handleOverIcon('O') }} onMouseLeave={(event) => { handleOverIcon('') }} >
                                    <Grid container columns={4}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>

                                            <Grid3x3Icon style={{ fontSize: '200px', color: 'white' }} />


                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid>
                        }
                        <Grid item xs={4} style={{ borderLeft: '1px solid white', borderBottom: '1px solid white', borderTop: '1px solid white' }}></Grid>

                    </Grid>
                </Box>
                {
                    showPlayGrid ? <GameGrid showG={showPlayGrid} player={player} /> :

                        <Grid container spacing={3} style={{ marginTop: '2px' }}>
                            {isOverX ?
                                <Grid item xs={4} onMouseOver={(event) => { handleOverX('x') }} onMouseLeave={(event) => { handleOverX('') }} onClick={(event) => showGrid('x')} style={{ borderRight: '1px solid white', borderTop: '1px solid white', borderBottom: '125px solid white', cursor: 'pointer', backgroundColor: '#4e4e59' }}>
                                    <Grid container columns={4}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>

                                            <CloseIcon style={{ fontSize: '180px', color: 'white' }} />


                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid> : <Grid item xs={4} onMouseOver={(event) => { handleOverX('x') }} onMouseLeave={(event) => { handleOverX('') }} style={{ borderRight: '1px solid white', borderTop: '1px solid white', borderBottom: '125px solid white' }}>
                                    <Grid container columns={4}>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>

                                            <CloseIcon style={{ fontSize: '180px', color: 'white' }} />


                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                    </Grid>
                                </Grid>
                            }
                            {
                                isOverPlay ?
                                    <Grid item xs={4} onMouseOver={(event) => { handleOver('O') }} onMouseLeave={(event) => { handleOver('') }} onClick={(event) => showGrid('n')} style={{ cursor: 'pointer', backgroundColor: '#4e4e59', borderLeft: '1px solid white', borderRight: '1px solid white', borderTop: '1px solid white', borderBottom: '25px solid white' }}>
                                        <Grid container columns={4}>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={2}>
                                                <h2 style={{
                                                    marginRight: '150px',
                                                    fontSize: '120px',
                                                    cursor: 'pointer',
                                                    color: 'white',
                                                }} >Play</h2>
                                            </Grid>
                                            <Grid item xs={1}></Grid>
                                        </Grid>
                                    </Grid> : <Grid item xs={4} onMouseOver={(event) => { handleOver('O') }} onMouseLeave={(event) => { handleOver('') }} onClick={(event) => showGrid()} style={{ cursor: 'pointer', borderLeft: '1px solid white', borderRight: '1px solid white', borderTop: '1px solid white', borderBottom: '25px solid white' }}>
                                        <Grid container columns={4}>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={2}>
                                                <h2 style={{
                                                    marginRight: '150px',
                                                    fontSize: '120px',
                                                    color: 'white'
                                                }} >Play</h2>
                                            </Grid>
                                            <Grid item xs={1}></Grid>
                                        </Grid>
                                    </Grid>
                            }{isOverO ? <Grid item xs={4} onMouseOver={(event) => { handleOverO('o') }} onMouseLeave={(event) => { handleOverO('') }} onClick={(event) => showGrid('o')} style={{ borderLeft: '1px solid white', borderTop: '1px solid white', borderBottom: '125px solid white', cursor: 'pointer', backgroundColor: '#4e4e59' }}>
                                <Grid container columns={4}>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={2}>

                                        <PanoramaFishEyeIcon style={{ fontSize: '180px', color: 'white' }} />


                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                            </Grid> : <Grid item xs={4} onMouseOver={(event) => { handleOverO('o') }} onMouseLeave={(event) => { handleOverO('') }} style={{ borderLeft: '1px solid white', borderTop: '1px solid white', borderBottom: '125px solid white' }}>
                                <Grid container columns={4}>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={2}>

                                        <PanoramaFishEyeIcon style={{ fontSize: '180px', color: 'white' }} />


                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                            </Grid>}


                        </Grid>
                }

                {
                    showBoard ? <RegistrationForm
                        open={showBoard}
                        closeDialog={handleRegClose}
                        handleGridOpen={handlePlayGridOpen}
                        setPlayer={setPlayer}
                        player={player}
                        playerChoice={playerCoice}
                    /> : <></>
                }

            </Box>
        </>
    )
}

export default Home;