import React, { useState } from 'react'
import styled from 'styled-components'
import imageLink from '@src/image-link'
import ClickableApp from '@components/clickable-app'
import { useStore } from '@src/context'
import { observer } from 'mobx-react-lite'
import ArrowDown from '@images/arrow-down.png'
import Arrow from '@images/arrow-squared.png'

const ComputerSearchBarContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(236, 233, 216);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 13px;
    height: 40px;
    padding: 5px 15px;
    > span {
        color: gray;
        margin-right: 8px;
    }
    > img {
        margin: 0 5px;
        height: 95%;
    }
`

const SearchBar = styled.div`
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 98%;
    border: 1px solid rgba(122, 122, 255, 0.6);
    > img {
        height: 100%;
        object-fit: contain;
    }
    &:hover {
        cursor: pointer;
    }
`

const SearchOption = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    align-items: center;
    > img {
        height: 25px;
        object-fit: contain;
        margin-right: 5px;
    }
`

const ClickableSearchOptionContainer = styled.div`
    z-index: 200;
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    > div {
        > img {
            width: 25px;
        }
    }

`
const SearchOptionComponent = (props) => (
    <SearchOption onClick={props.onClick}>
         <img src={imageLink(props.img)} alt="Chosen file" />
        <span>{props.desc}</span>
    </SearchOption>
)
const ComputerSearchBar = observer(() => {
    const [searchable, setSearchable] = useState(false)
    const { ApplicationStore } = useStore()
    const { chosenFile, unchosenFiles } = ApplicationStore

    const toggleSearchable = () => setSearchable(prev => !prev)
    const onOptionClick = (key) => {
        setSearchable(false)
        ApplicationStore.openApplication(key)   
    }
    return (
        <ComputerSearchBarContainer>
            <span>Address</span>
            <SearchBar >
                <SearchOptionComponent onClick={toggleSearchable} {...chosenFile} />
                {searchable && <ClickableSearchOptionContainer>
                    {unchosenFiles.map(file => <ClickableApp 
                        onClick={() => onOptionClick(file.key)}
                        {...file}
                    />)}
                </ClickableSearchOptionContainer>}
                <img onClick={toggleSearchable} src={ArrowDown} alt="Menu Arrow" />
            </SearchBar>
            <img src={Arrow} alt="Arrow" />
            <span>Go</span>
        </ComputerSearchBarContainer>
    )
})

export default ComputerSearchBar