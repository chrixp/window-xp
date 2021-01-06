import styled from 'styled-components'
import "xp.css/dist/XP.css"
import ErrorIcon from '@images/error.png'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'

const ErrorContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 200;
    display: ${props => props.error === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    .window {
        width: 300px;
        .title-bar {
            height: 35px;
            padding: 7px;
        }
        .window-body {
            display: flex;
            flex-direction: row;
            padding: 8px;
            align-items: center;
            > img {
                width: 50px;
                object-fit: contain;
                margin-right: 8px;
            }
        }
    }
`

const ErrorModal = observer(() => {
    const { ApplicationStore } = useStore()
    return (
        <ErrorContainer error={ApplicationStore.message !== null}>
             <div className="window"> 
                <div className="title-bar">
                    <div className="title-bar-text">
                        <p>{ApplicationStore.type === 'warning' ? 'Warning' : 'Unauthorized'}</p>
                    </div>
                    <div className="title-bar-controls">
                        <button onClick={() => ApplicationStore.closeMessage()} aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                        <img src={ErrorIcon} alt="Error Icon" />
                        <span>{ApplicationStore.message}</span>
                </div>
            </div>
        </ErrorContainer>
       
    )
})

export default ErrorModal