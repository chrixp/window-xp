import React from 'react'
import styled from 'styled-components'
import imageLink from '@src/image-link'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'

const Icon = styled.img`
    height: 80%;
`
const TaskBarIconText = styled.span`
    font-size: 13px;
    letter-spacing: 0.7px;
    margin-left: 5px;
`
const TaskBarIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 140px;
    color: rgb(255, 255, 255);
    margin-top: 2px;
    padding: 0 8px;
    height: 85%;
    font-size: 11px;
    border-radius: 2px;
    background-color: rgb(60, 129, 243);
    box-shadow: rgba(0, 0, 0, 0.3) -1px 0px inset, rgba(255, 255, 255, 0.2) 1px 1px 1px inset;
    &:hover {
        cursor: pointer;
        background-color: rgb(83, 163, 255);
        box-shadow: rgba(0, 0, 0, 0.2) 1px 0px 1px, rgba(255, 255, 255, 0.3) 1px 1px 1px inset;
        }
    }
`
const TaskBarIcon = observer((props) => {
    const { ApplicationStore } = useStore()
    return (
        <TaskBarIconContainer onClick={() => ApplicationStore.smartMinimizeApplication(props.id)}>
            <Icon src={imageLink(props.img)} />
            <TaskBarIconText>{props.desc}</TaskBarIconText>
        </TaskBarIconContainer>
    )
})

export default TaskBarIcon
