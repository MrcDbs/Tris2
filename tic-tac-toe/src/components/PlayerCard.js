import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const PlayerCard = (props) => {

    // const [punteggioO, setPunteggioO] = useState(props.scoreO);
    // const [punteggioX, setPunteggioX] = useState(props.scoreX);
    // const [count1, setCount1] = useState(10);
    // const [count2, setCount2] = useState(10);


    // useEffect(() => {
    //     console.log('USE EFFECT PLAYER CARD');
    // }, [punteggioX, punteggioO]);

    const changeColorX = (param) => {
        if (param > props.scoreO) {
            return '#07f52f';
        } else if (param === props.scoreO) {
            return '#fcf905';
        } else {
            return 'red';
        }
    }
    const changeColorO = (param) => {
        if (param > props.scoreX) {
            return '#07f52f';
        } else if (param === props.scoreX) {
            return '#fcf905';
        } else {
            return 'red';
        }
    }

    return (
        <>
            <div >
                <h1 style={{ color: 'white', fontSize: '65px' }}>{props.player.playerFullName}</h1>
                {props.symbol === 'x' ? <CloseIcon style={{ color: 'white', fontSize: '65px' }} /> : <PanoramaFishEyeIcon style={{ fontSize: '65px', color: 'white' }} />}
                {/* <h2 style={{ color: 'white', fontSize: '50px' }}>{props.player.symbol}</h2> */}
                <p style={{ color: 'white', fontSize: '40px' }}>Score</p>
                {props.symbol === 'x' ? <p style={{ color: [changeColorX(props.scoreX)], fontSize: '45px' }}>{props.scoreX} </p> : <p style={{ color: [changeColorO(props.scoreO)], fontSize: '45px' }}>{props.scoreO}</p>}
                {props.p1 === true ? <h2 style={{ color: '#07f52f', fontSize: '40px' }}>It's your TURN</h2> : <></>}
                {props.p2 === true ? <h2 style={{ color: '#07f52f', fontSize: '40px' }}>It's your TURN</h2> : <></>}

            </div>
        </>
    )
}

export default PlayerCard;