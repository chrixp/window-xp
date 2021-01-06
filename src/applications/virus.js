import React, { useEffect, useState } from 'react'
import runVirus from '@src/run-virus'
import VirusIcon from '@images/virus.png'
import EvilLaugh from '@sounds/evil-laugh.mp3'
import styled, { keyframes, css } from 'styled-components'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'
const evilLaugh = new Audio(EvilLaugh)

const movingAround = keyframes`
    0% {
        transform: rotate(0deg) translate(0px) scale(1);
    }
    35% {
        transform: rotate(25deg) translate(140px) scale(0.2);
    }
    60% {
        transform: rotate(-40deg) translate(40px) scale(1.8);
    }
    100% {
        transform: rotate(180deg) translate(80px) scale(1);
    }
`

const RandomVirus = styled.img`
    position: fixed;
    left: ${props => props.left}%;
    top: ${props => props.top}%;
    width: 50px;
    height: 50px;
    z-index: 200;
    animation: ${movingAround} 2s infinite ease-in-out;
`


const VirusBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 0;

    top: 0;
    left: 0;
    background: transparent;
    color: #00FF00;
    margin:0;
    font-size: 13px;
    z-index: 999;
    transition: 2s linear;
    ${props => props.done === true && css`
        background-color: black;
        height: 100vh;
    `}
    canvas {
        position: fixed;
        top:0;
        left:0;
    }
    .bars-and-stuff{
        left:66.6%;
    }

    .output-console {
        position:fixed;
        overflow:hidden;
    }
    p {
         margin:0
    }
`


const Virus = observer(() => {
    const [viruses, setViruses] = useState([])
    const [done, setDone] = useState(false)
    const [played, setPlayed] = useState(false)
    const { ApplicationStore } = useStore()
    const getRandomInteger= (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const generateViruses = () => {
        if(viruses.length < 40) {
            setTimeout(() => {
                const newViruses = [...viruses]
                newViruses.push({ x: getRandomInteger(1,100), y: getRandomInteger(1, 100)})
                setViruses(newViruses) 
            }, 80)
        } else {
            setDone(true)
            runVirus()
        }
    }

    useEffect(() => {
        if(!played) {
            evilLaugh.play()
            setPlayed(true)
            ApplicationStore.setTopElement('virus', 999)
        }

        generateViruses()
    },[viruses])
    return (
        <VirusBackground done={done}>
            <canvas className='hacker-3d-shiz'></canvas>
            <canvas className='bars-and-stuff'></canvas>
            <div className="output-console"></div>
            {viruses.map(virus => <RandomVirus src={VirusIcon} top={virus.y} left={virus.x} alt="virus" />)}
        </VirusBackground>
    )
})

export default Virus