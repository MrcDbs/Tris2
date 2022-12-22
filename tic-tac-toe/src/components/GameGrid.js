import React, { useEffect, useState } from 'react';
import '../App.css';
import CardSlot from './CardSlot';

import PlayerCard from './PlayerCard';
import { Grid, Box, DialogContent, CircularProgress, Backdrop, Button, Modal } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { setPosition, checkWinner, mossaComputer } from '../utils/MossaTris';

const GameGrid = (props) => {

    const [isOver, setIsOver] = useState(false);
    const [color, setColor] = useState('#282830');
    const [val, setVal] = useState(props.player.symbol);
    const [cursor, setCursor] = useState('pointer');
    const [p1, setP1] = useState(true);
    const [p2, setP2] = useState(false);
    const [count, setCount] = useState(3);
    const [iconColorX, setIconColorX] = useState('white');
    const [iconColorO, setIconColorO] = useState('white');
    const [comp, setComp] = useState({
        playerFullName: 'COMPUTER',
        symbol: '',
        id: null

    });
    const [grigliaDiGioco, setGrigliaDiGioco] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ])
    const [turn, setTurn] = useState({
        a: val,
        b: val,
        c: val,
        d: val,
        e: val,
        f: val,
        g: val,
        h: val,
        i: val
    });
    const [player, setPlayer] = useState(props.player);
    const [matrix, setMatrix] = useState({
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0
    });

    const [matrixClick, setMatrixClick] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false
    });

    const [cardColors, setCardColors] = useState({
        a: '#38383b',
        b: '#38383b',
        c: '#38383b',
        d: '#38383b',
        e: '#38383b',
        f: '#38383b',
        g: '#38383b',
        h: '#38383b',
        i: '#38383b'
    });

    const [dialog, setDialog] = useState(true);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [open, setOpen] = useState(false);
    const [winner, setWinner] = useState('');
    const handleCloseBackdrop = () => {
        setOpen(false);
    };
    const handleToggle = (winner) => {
        console.log('ENTER HANDLETOGGLE');
        setWinner(winner);
        setOpen(!open);

    };
    const handleToggleClose = () => {
        console.log('ENTER HANDLETOGGLECLOSE');
        setOpen(!open);
        reset();
    };

    useEffect(() => {
        //console.log(' 3 ENTRO NELLO USE EFFECT GRID');
        // console.log('ICON X', iconColorX);
        // console.log('ICON O', iconColorO);
        // console.log('SCORE O', scoreO);
        // console.log('SCORE X', scoreX);

    }, [iconColorO, iconColorX, scoreO, scoreX]);

    useEffect(() => {
        if (count > 1) {
            setTimeout(() => setCount(count - 1), 1000);
        }
        else {
            setTimeout(() => handleClose(), 1000);

        }
    }, [count])

    const handleClose = () => {

        setDialog(false);

    };


    const beginningDialog = () => {
        return (

            <Dialog onClose={handleClose} open={dialog} >
                <DialogTitle sx={{ backgroundColor: '#282830', color: 'white', fontSize: '50px' }}>GAME STARTS IN</DialogTitle>
                <DialogContent sx={{ backgroundColor: '#282830' }}>

                    <h1 style={{ fontSize: '80px', textAlign: 'center', color: 'white' }}> {count}</h1>
                </DialogContent>
            </Dialog>

        )
    }

    const play = () => {
        //console.log('ENTRA NEL PLAY', props.player)

        return (
            <>


                <div style={{ textAlign: 'center', borderTop: '2px solid white', height: '400px' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={4} sx={{ borderRight: '0.5px solid white', margin: 'none' }}>
                            <PlayerCard p1={p1} player={player} symbol={player.symbol} scoreO={scoreO} scoreX={scoreX} />
                        </Grid>
                        <Grid item xs={4}  >
                            <div style={{ marginBottom: '150px', textAlign: 'center', borderLeft: 'none', borderRight: 'none', marginRight: '20px' }}>
                                {dialog ? <h1 style={{ color: '#282830', fontSize: '30px' }}>GAME IS ON</h1> :
                                    <h1 style={{ color: '#07f52f', fontSize: '30px' }}>GAME IS ON</h1>
                                }


                                <div >
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={3} >
                                            <Grid container item spacing={3} >
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'a')} onMouseLeave={(event) => mOver(event, 0, 'a')} onClick={(event) => {
                                                    setPosition(0, 0, turn.a, grigliaDiGioco);
                                                    console.log('0 0 =>', grigliaDiGioco[0][0]);
                                                    btnClicked(event, 1, 'a');

                                                    //console.log('MATRIX RESULT', grigliaDiGioco[0][0]);
                                                }
                                                }>
                                                    {matrix.a === 1 ? <CardSlot color={cardColors.a} open={true} player={player} turn={turn.a} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}

                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'b')} onMouseLeave={(event) => mOver(event, 0, 'b')} onClick={(event) => {
                                                    setPosition(0, 1, turn.b, grigliaDiGioco);
                                                    console.log('0 1 =>', grigliaDiGioco[0][1]);
                                                    btnClicked(event, 1, 'b');

                                                    //console.log('MATRIX RESULT', grigliaDiGioco[0][1]);
                                                }
                                                }>
                                                    {matrix.b === 1 ? <CardSlot color={cardColors.b} open={true} player={player} turn={turn.b} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'c')} onMouseLeave={(event) => mOver(event, 0, 'c')} onClick={(event) => {
                                                    setPosition(0, 2, turn.c, grigliaDiGioco);
                                                    console.log('0 2 =>', grigliaDiGioco[0][2]);
                                                    btnClicked(event, 1, 'c');

                                                    //console.log('MATRIX RESULT', grigliaDiGioco[0][2]);
                                                }
                                                }>
                                                    {matrix.c === 1 ? <CardSlot color={cardColors.c} open={true} player={player} turn={turn.c} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                            <Grid container item spacing={3}>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'd')} onMouseLeave={(event) => mOver(event, 0, 'd')} onClick={(event) => {
                                                    setPosition(1, 0, turn.d, grigliaDiGioco);
                                                    console.log('1 0 =>', grigliaDiGioco[1][0]);
                                                    btnClicked(event, 1, 'd');

                                                }
                                                }>
                                                    {matrix.d === 1 ? <CardSlot color={cardColors.d} open={true} player={player} turn={turn.d} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'e')} onMouseLeave={(event) => mOver(event, 0, 'e')} onClick={(event) => {
                                                    setPosition(1, 1, turn.e, grigliaDiGioco);
                                                    console.log('1 1 =>', grigliaDiGioco[1][1]);
                                                    btnClicked(event, 1, 'e');

                                                }
                                                }>
                                                    {matrix.e === 1 ? <CardSlot color={cardColors.e} open={true} player={player} turn={turn.e} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'f')} onMouseLeave={(event) => mOver(event, 0, 'f')} onClick={(event) => {
                                                    setPosition(1, 2, turn.f, grigliaDiGioco);
                                                    btnClicked(event, 1, 'f');

                                                }
                                                }>
                                                    {matrix.f === 1 ? <CardSlot color={cardColors.f} open={true} player={player} turn={turn.f} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                            <Grid container item spacing={3}>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'g')} onMouseLeave={(event) => mOver(event, 0, 'g')} onClick={(event) => {
                                                    setPosition(2, 0, turn.g, grigliaDiGioco);
                                                    btnClicked(event, 1, 'g');

                                                }
                                                }>
                                                    {matrix.g === 1 ? <CardSlot color={cardColors.g} open={true} player={player} turn={turn.g} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'h')} onMouseLeave={(event) => mOver(event, 0, 'h')} onClick={(event) => {
                                                    setPosition(2, 1, turn.h, grigliaDiGioco);
                                                    btnClicked(event, 1, 'h');

                                                }
                                                }>
                                                    {matrix.h === 1 ? <CardSlot color={cardColors.h} open={true} player={player} turn={turn.h} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                                <Grid item xs={4} onMouseOver={(event) => mOver(event, 1, 'i')} onMouseLeave={(event) => mOver(event, 0, 'i')} onClick={(event) => {
                                                    setPosition(2, 2, turn.i, grigliaDiGioco);
                                                    btnClicked(event, 1, 'i');

                                                }
                                                }>
                                                    {matrix.i === 1 ? <CardSlot color={cardColors.i} open={true} player={player} turn={turn.i} cursor={cursor} iconColorX={iconColorX} iconColorO={iconColorO} /> : <CardSlot open={false} />}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </div>
                                <h2 style={{ color: 'white', fontSize: '50px', cursor: 'pointer', border: '1px solid white', backgroundColor: [color] }} onClick={(event) => reset()} onMouseOver={(event) => onHover(true)} onMouseLeave={(event) => onHover(false)}>RESET</h2>
                            </div>

                        </Grid>
                        <Grid item xs={4} sx={{ borderLeft: '0.5px solid white', marginLeft: 'none' }}>
                            {player.symbol === 'x' ? <PlayerCard p2={p2} player={comp} symbol={'o'} scoreO={scoreO} scoreX={scoreX} btnClicked={btnClicked} /> : <PlayerCard p2={p2} player={comp} symbol={'x'} scoreX={scoreX} scoreO={scoreO} btnClicked={btnClicked} />}

                        </Grid>
                    </Grid>
                </div>

                <Backdrop
                    // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleToggleClose}
                >
                    <div>
                        <h1 style={{ color: '#fcf905', fontSize: '45px' }}>{winner}</h1>
                    </div>
                    <div>
                        {/* <Button onClick={handleToggleClose} sx={{ border: '1px solid #07f52f', color: '#07f52f' }}>Close</Button> */}
                    </div>
                    {/* <CircularProgress color="inherit" />  */}
                </Backdrop>*

            </>
        )
    }
    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    const modal = () => {
        return (

            <Modal
                open={open}
                onClose={handleToggleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ backgroundColor: 'grey' }}>
                    <div>
                        <h1 style={{ color: '#07f52f' }}>{winner}</h1>
                    </div>
                </Box>
                <div>
                    <Button onClick={handleToggleClose} sx={{ border: '1px solid #07f52f', color: '#07f52f' }}>Close</Button>
                </div>
            </Modal>

        )

    }

    const mOver = (event, value, index) => {

        if (matrixClick[index] === false) {
            //console.log(' 1 entra nell if');
            setCursor('pointer');
            setMatrix((matrix) => ({ ...matrix, [index]: value }));
        } else {
            setCursor('not-allowed');

        }
    }

    const btnClicked = (event, value, index) => {
        setMatrixClick((matrixClick) => ({ ...matrixClick, [index]: true }));
        setMatrix((matrix) => ({ ...matrix, [index]: value }));
        console.log(' CLICK DEL BOTTONE');
        let res;
        if (turn[index] === 'x') {
            res = checkWinner(3, grigliaDiGioco);
        } else {
            res = checkWinner(-3, grigliaDiGioco);
        }

        if (turn[index] === 'x') {
            //console.log('ENTRO NELL IF PER VEDERE SE TURN.INDEX E X ')
            setTurn((turn) => {
                for (var key in turn) {
                    if (key !== index && matrixClick[key] === false) {
                        turn[key] = 'o';
                        //console.log('CHIAVE DI TURN ', turn[key])
                    }
                }
                return turn;
            });

            //setTurn((turn) => ({ ...turn, [index]: 'o' }));
        } else if (turn[index] === 'o') {
            setTurn((turn) => {
                for (var key in turn) {
                    if (key !== index && matrixClick[key] === false) {
                        turn[key] = 'x';
                        //console.log('CHIAVE DI TURN ', turn[key])
                    }
                }
                return turn;
            });
        }
        if (p1) {
            setP1(false);
            setP2(true);
        } else {
            setP1(true);
            setP2(false);
        }
        if (res.sum === 3) {
            setCardColors((cardColors) => {
                for (let key of res.diagonal) {
                    cardColors[key] = '#476340';
                }
                return cardColors;
            })
            setIconColorX('#07f52f');
            setIconColorO('red');
            props.player.symbol === 'x' ? showWinner(props.player.playerFullName + ' WINS', 'x') : showWinner('COMPUTER WINS', 'x');
            // setTimeout(() => {
            //     reset();
            //     props.player.symbol === 'x' ? showWinner(props.player.playerFullName + ' WINS', 'x') : showWinner('COMPUTER WINS', 'x');
            // }, 300);
        } else if (res.sum === -3) {
            setCardColors((cardColors) => {
                for (let key of res.diagonal) {
                    cardColors[key] = '#476340';
                }
                return cardColors;
            })
            setIconColorO('#07f52f');
            setIconColorX('red');
            props.player.symbol === 'o' ? showWinner(props.player.playerFullName + ' WINS', 'o') : showWinner('COMPUTER WINS', 'o');
            // setTimeout(() => {
            //     reset();
            //     props.player.symbol === 'o' ? showWinner(props.player.playerFullName + ' WINS', 'o') : showWinner('COMPUTER WINS', 'o');
            // }, 300);
        }
    }

    const showWinner = (winner, symbol) => {
        //alert(winner);
        alertWinner(winner);
        symbol === 'x' ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
    }

    const reset = () => {
        console.log('RESET CALLED');
        setTurn((turn) => {
            for (let key in turn) {
                turn[key] = val;
            }
            return turn;
        });
        setMatrix((matrix) => {
            for (let key in matrix) {
                matrix[key] = 0;
            }
            return matrix;
        })
        setMatrixClick((matrixClick) => {
            for (let key in matrixClick) {
                matrixClick[key] = false;
            }
            return matrixClick;
        })
        setCursor('pointer');
        setComp((comp) => ({ ...comp, playerFullName: 'COMPUTER' }));
        setP1(true);
        setP2(false);
        setGrigliaDiGioco((grigliaDiGioco) => {
            for (let key in grigliaDiGioco) {
                grigliaDiGioco[key] = [0, 0, 0];
            }
            return grigliaDiGioco;
        });
        setIconColorO('white');
        setIconColorX('white');
        setCardColors((cardColors) => {
            for (let key in cardColors) {
                cardColors[key] = '#38383b';
            }
            return cardColors;
        });
    }

    const alertWinner = (winner) => {
        handleToggle(winner);
    }

    const onHover = (param) => {
        param ? setColor('#4e4e59') : setColor('#282830');
    }

    return (
        <>
            {beginningDialog()}
            {play()}
            {/* {modal()} */}
        </>
    )
}

export default GameGrid;