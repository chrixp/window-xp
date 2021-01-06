import React, { useEffect } from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import TitleBar from './title-bar'
import Toolbar from './tool-bar'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'
import Computer from '@applications/computer'
import Virus from '@applications/virus'
import Notepad from '@applications/notepad'
import Image from '@applications/image'
import { APP_TYPES } from '@src/consts'
import "xp.css/dist/XP.css"
import "./draggable.css"

const ApplicationContainer = styled.div`
    display: ${props => props.minimized === true ? 'none' : 'flex'};
    z-index: 7;
    flex-direction: column;
    height:${props => props.maximized ? "96.2%" : "70%"};
    width: ${props => props.maximized ? "100%" : "70%"};
    .window {
        padding: 0;
        box-shadow: none;
        border: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        .title-bar {
            font-family: Noto;
            padding: 0;
            padding-right: 10px;
            height: 35px;
            &:hover {
                cursor: pointer;
            }
            .title-bar-text {
                display: flex;
                flex-direction: row;
                align-items: center;
                
            }
        }
        .window-body {
            border: 3px solid #003bda;
            border-top: none;
            margin: 0;
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: hidden;
        }
    }
`
const IFrame = styled.iframe`
    width: calc(100% - 7px);
    height: 100%;
    border: none;
    margin: 0 3px;
`

const Application = observer((props) => {    
    const { ApplicationStore } = useStore()

    useEffect(() => {
        ApplicationStore.setTopElement(props.id)
    }, [])

    const renderApplication = () => {
        switch (props.type) {
            case APP_TYPES.WIDGET:
                return <IFrame src={props.link} />
            case APP_TYPES.IMAGE:
                return <Image {...props} />
            case APP_TYPES.NOTEPAD:
                return <Notepad />
            case APP_TYPES.VIRUS:
                return <Virus />
            case APP_TYPES.COMPUTER:
                return <Computer />
            default:
                return null
            }
    }
    return ( 
        <Draggable 
            disabled={props.resized}
            position={props.position}>
            <ApplicationContainer
                onClick={() => ApplicationStore.setTopElement(props.id)}
                className={props.id}
                minimized={props.minimized} 
                maximized={props.resized}>
                <div className="window"> 
                    <TitleBar {...props} />
                    <div className="window-body">
                        {props.bars && <Toolbar bars={props.bars} />}
                        {renderApplication()}
                    </div>
                </div>
            </ApplicationContainer>
        </Draggable>
    )
})

export default Application