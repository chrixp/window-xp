import styled, { css } from 'styled-components'
import imageLink from '@src/image-link'
import React, { useState } from 'react'
import { v4 } from 'uuid'
import Arrow from '@images/arrow-squared.png'

const ExplorerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const IFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    overflow: auto;
    flex: 1;
`
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
        height: 18px;
        object-fit: contain;
    }
`

const SearchBar = styled.input`
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 98%;
    border: 1px solid rgba(122, 122, 255, 0.6) !important;
    &:hover {
        cursor: pointer;
    }
`

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
    padding: 0 5px;
    margin: 5px 0;
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
const Explorer = () => {

  const topBarIcons = [
    {
        img: 'arrow.png',
        desc: 'Back',
        arrow: true,

    },
    {
        img: 'arrow.png',
        rotated: true,
        arrow: true,
        clickable: false
    },
    {
      img: 'explorer-1.png',
      clickable: true
    },
    {
      img: 'explorer-2.png',
      clickable: true
    },
    {
      img: 'explorer-3.png',
      clickable: true
    },
    {
        img: 'search.png',
        desc: 'Search',
        border: true,
        clickable: true
    },
    {
        img: 'explorer-6.png',
        desc: 'Favorites',
        border: true,
        clickable: true
    },
    {
        img: 'explorer-4.png',
        border: true,
        clickable: true
    },
    {
        img: 'explorer-5.png',
        arrow: true,
        clickable: true
    },
    {
        img: 'explorer-7.png',
        clickable: true 
    },
    {
        img: 'social.png',
        clickable: true
    }
  ]
  const [search, setSearch] = useState('https://crispy.live')
  const [query, setQuery] = useState('https://crispy.live')

  const startSearching = () => {
    setQuery(search)
  }

  const onEnter = (e) => {
    if(e.code === 'Enter') { 
      startSearching()
    }
  }

  return (
    <ExplorerContainer>
      <TopBarContainer>
      {topBarIcons.map(icon => (
          <TopBarIconContainer key={v4()} {...icon}>
              <img src={imageLink(icon.img)} alt={icon.desc} />
              <span>{icon.desc}</span>
          </TopBarIconContainer>
      ))}
      </TopBarContainer>
       <ComputerSearchBarContainer>
            <span>Address</span>
            <SearchBar
              onKeyDown={(e) => onEnter(e)}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
            <img src={Arrow} alt="Arrow" />
            <span>Go</span>
        </ComputerSearchBarContainer>
       <IFrame src={query} title="Internet Explorer" />
    </ExplorerContainer>
  
  )
}

export default Explorer