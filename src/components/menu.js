import styled from 'styled-components'
import Chess from '@images/chess.jpg'
import MenuTopPicture from '@images/menu-top.png'
import ShutdownIcon from '@images/shutdown-icon.png'
import LogoffIcon from '@images/logoff-icon.png'
import RestartIcon from '@images/restart-icon.ico'
import ClickableApp from './clickable-app'
import { menuApplications } from '@src/consts'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'

const UserImage = styled.img`
    width: 45px;
    height: 45px;
    object-fit: contain;
    border: 2px solid rgba(255,255,255,0.6);
    border-radius: 5px;
` 
const UserName = styled.span`
    font-weight: bold;
    font-size: 15px;
    color: white;
    margin-left: 10px;
`

const MenuTop = styled.div`
    overflow: hidden;
    display: flex;
    height: 12%;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    background: url(${MenuTopPicture}) no-repeat;
    background-size: 100% 100%; 
    
`
const MenuBottom = styled.div`
    background: linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%);
    overflow: hidden;
    display: flex;
    height: 8%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const MenuContent = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`

const MenuContentLeft = styled.div`
    background-color: white;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
`

const MenuContentRight = styled(MenuContentLeft)`
    background-color: white;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    background-color: rgb(203, 227, 255);
    > div:hover {
        cursor: not-allowed;
    }
`

const MenuContainer = styled.div`
    overflow: hidden;
    border-radius: 6px 6px 0 0;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 4px 2px;
    background-color: rgb(66, 130, 214);
    position: absolute;
    bottom: 100%;
    background-color: white;
    left: 2px;
    z-index: 99;
    display: flex;
    flex-direction: column;
`

const MenuBottomButton = styled.div`
    padding: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 12px;
    > img {
        width: 28px;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const MenuItemImage = styled.img`
    margin-right: 8px;
    width: 35px;
    height: auto;
    object-fit: contain;
`

const Menu = observer(() => {
    const { ApplicationStore } = useStore()
    const logOff = () => {
        console.log("CALLED")
        window.location.href = `${window.location.origin}/authenticate` 
    }

    const restartPage = () => {
        window.location.href = window.location.origin
    }

    return (
        <MenuContainer>
            <MenuTop>
                <UserImage src={Chess} />
                <UserName>Chris Phan</UserName>
            </MenuTop>
            <MenuContent>
                <MenuContentLeft>
                    {ApplicationStore.menuApps.map(application => (
                       <ClickableApp 
                         onClick={() => ApplicationStore.openApplication(application.key)}
                         {...application} />
                    ))}
                </MenuContentLeft>
                <MenuContentRight>
                    {menuApplications.map(application => (
                        <ClickableApp
                          onClick={() => ApplicationStore.openMessage()}
                          {...application}
                        /> 
                    ))}
                </MenuContentRight>
            </MenuContent>
            <MenuBottom>
                <MenuBottomButton onClick={() =>  logOff()}>
                    <MenuItemImage 
                        src={LogoffIcon} />
                    <span>Log off</span>
                </MenuBottomButton>
                <MenuBottomButton onClick={() => ApplicationStore.openMessage()}>
                    <MenuItemImage src={ShutdownIcon} />
                    <span>Shut down</span>
                </MenuBottomButton>
                <MenuBottomButton onClick={() => restartPage()}>
                    <MenuItemImage src={RestartIcon} />
                    <span>Restart</span>
                </MenuBottomButton>
            </MenuBottom>
        </MenuContainer>
    )
})

export default Menu