import React, { useState, useEffect } from 'react'
import MenuIcon from '@images/menu.png'
import imageLink from '@src/image-link'
import styled from 'styled-components'
import TaskBarIcon from './task-bar-icon'
import Menu from './menu'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'
import { action } from 'mobx'

const TaskBarMenu = styled.img`
    height: 100%;
    z-index: 99;
    margin-right: 20px;
    &:hover {
        cursor: pointer;
    }
`

const TaskBarIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`
const TaskBarContainer = styled.div`
    position: relative;
    z-index: 99;
    display: flex;
    flex-direction: row;
    height: 3.8%;
    min-height: 28px;
    width: 100%;
    background: rgba(0, 0, 0, 0) linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%) repeat scroll 0% 0%;
`

const TaskBarRightSideContainer = styled.div`
    background: linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%);
    border-left: 1px solid rgb(16, 66, 175);
    box-shadow: rgb(24, 187, 255) 1px 0px 1px inset;
    display: flex;
    padding: 0 12px;
    align-items: center;
    > img {
        padding: 2px;
        &:hover {
            cursor: pointer;
        }
    }
    > span {
        color: white;
        margin-left: 5px;
    }
`
const getDate = () =>  (new Date()).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
const TaskBarRightSide = () => {
    const [time, setTime] = useState(getDate())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getDate())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const rightSideIcons = ['sound.png','usb.png','shield.png']
    return (
        <TaskBarRightSideContainer>
            {rightSideIcons.map(icon => <img key={icon} src={imageLink(icon)} alt="icon" />)}
                <span>{time}</span>
        </TaskBarRightSideContainer>
    )
}

const TaskBar = observer((props) => {
    const { ApplicationStore } = useStore()
    const toggleMenu = action(() => {
        ApplicationStore.unclickEverything()
        ApplicationStore.menuOpen = !ApplicationStore.menuOpen
    })
    return (
        <TaskBarContainer>
            {ApplicationStore.menuOpen && <Menu />}
            <TaskBarMenu 
                onClick={() => toggleMenu()}
                src={MenuIcon} />
            <TaskBarIconContainer>
                {props.openApplications.map(application => (
                    <TaskBarIcon 
                        id={application.key}
                        {...application} />
                ))}
            </TaskBarIconContainer>
            <TaskBarRightSide />
        </TaskBarContainer>
    )
})

export default TaskBar