import styled, { css } from 'styled-components'
import ComputerSearchBar from '@components/computer-search-bar'
import ComputerContent from '@components/computer-content'
import imageLink from '@src/image-link'
import { useStore } from '@src/context'
import { observer} from 'mobx-react-lite'

const TopBarContainer = styled.div`
    display: flex;
    flex-diretion: row;
    height: 50px;
    background-color: rgb(236, 233, 216);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
`

const TopBarIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    > img {
        margin-right: 3px;
        width: 30px; 
    }
    > span {
        font-size: 13px;
    }
    opacity: 0.5;

    ${props => props.rotated === true && css`
        > img {
            margin-right: 0px;
            transform: rotate(180deg);
        }
    `}
    ${props => props.arrow === true && css`
        &::after {
            content: "";
            display: block;
            margin-left: 5px;
            border-width: 3px 3px 0px;
            border-color: rgb(0, 0, 0) transparent;
            border-style: solid;
        }
    `}

    ${props => props.border === true && css`
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    `}

    ${props => props.clickable === true && css`
        opacity: 1;
        &:hover {
            cursor: pointer;
            background-color: rgb(222, 222, 222);
            box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 1px inset;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.1);
            border-image: initial;
        }
    `}
`

const ComputerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 100%;
`


const Computer =  observer(() => {
    const { ApplicationStore } = useStore()
    const topBarIcons = [
        {
            img: 'arrow.png',
            desc: 'Back',
            arrow: true,
            clickable: ApplicationStore.back !== null,
            onClick: ApplicationStore.back !== null ? () => ApplicationStore.goBack() : null

        },
        {
            img: 'arrow.png',
            rotated: true,
            arrow: true,
            clickable: ApplicationStore.next !== null,
            onClick: ApplicationStore.next !== null ? () => ApplicationStore.goNext() : null
        },
        {
            img: 'search.png',
            desc: 'Search',
            border: true,
            clickable: false
        },
        {
            img: 'folder.png',
            desc: 'Folders',
            border: true,
            clickable: false
        },
        {
            img: 'big-folder.png',
            arrow: true,
            border: true,
            clickable: false
        }
    
    ]
    return (
        <ComputerContainer>
            <TopBarContainer>
                <TopBarContainer>
                    {topBarIcons.map(icon => (
                        <TopBarIconContainer {...icon}>
                            <img src={imageLink(icon.img)} alt={icon.desc} />
                            <span>{icon.desc}</span>
                        </TopBarIconContainer>
                    ))}
                </TopBarContainer>
            </TopBarContainer>
            <ComputerSearchBar />
            <ComputerContent />
        </ComputerContainer>
    )
})

export default Computer;