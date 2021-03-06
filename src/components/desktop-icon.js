import React from 'react'
import styled from 'styled-components'
import imageLink from '@src/image-link'
import Draggable from 'react-draggable'
import { observer } from 'mobx-react-lite'
import isMobile from '@src/is-mobile'

const DesktopIconContainer = styled.div`
    position: absolute; 
    left: ${props => props.x}px;
    top:  ${props => props.y}px;
    padding: 0.7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    color: white;
    max-width: 90px;
    &:hover {
        cursor: pointer;
    }
`
const DesktopIconImage = styled.img`
    margin-bottom: 0.5em;
    object-fit: contain;
    width: ${props => props.width ? props.width : '40'}px;
    opacity: ${props => props.clicked === true ? 0.5 : 1};
`

const DesktopIconDesc = styled.p`
    text-align: center;
    margin: 0;
    padding: 0.2em;
    font-size: 11px;
    letter-spacing: 0.2px;
    background-color: ${props => props.clicked === true ? 'rgb(11, 97, 255)' : 'transparent'};
    
`

const DesktopIcon = observer((props) => {
    return (
        <Draggable disabled={isMobile()}>
            <DesktopIconContainer x={props.x} y={props.y} onClick={props.onClick}>
            <DesktopIconImage width={props.iconWidth} clicked={props.clicked} src={imageLink(props.img)} alt="" />
            <DesktopIconDesc clicked={props.clicked}>{props.desc}</DesktopIconDesc>
            </DesktopIconContainer>
        </Draggable>
    )
})

export default DesktopIcon