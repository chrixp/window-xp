import React from 'react'
import styled, { css } from 'styled-components'
import minesweeper from 'minesweeper'
import MineBombImage from '@images/minesweeper/mine-bomb.png'
import SmileImage from '@images/minesweeper/smile.png'
import DeadSmileImage from '@images/minesweeper/dead.png'
import Score from '@images/minesweeper/score-0.png'
import imageLink from '@src/image-link'
import { v4 } from 'uuid';

const DEFAULT_ROWS = 15
const DEFAULT_COLS = 15
const DEFAULT_MINES = 25

const BoardStateEnum = minesweeper.BoardStateEnum;
const CellStateEnum = minesweeper.CellStateEnum;
const CellFlagEnum = minesweeper.CellFlagEnum;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  border-left: 3px solid rgb(245, 245, 245);
  border-top: 3px solid rgb(245, 245, 245);
  background-color: rgb(192, 192, 192);
`
const MineContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(192, 192, 192);
`

const MineLine = styled.div`
  display: flex;
  flex-direction: row;
`
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  border-radius: 1px;
  border-color: rgb(128, 128, 128) rgb(245, 245, 245) rgb(245, 245, 245) rgb(128, 128, 128);
  border-style: solid;
  border-width: 2px;
  margin-bottom: 5px;
  padding: 0 10px;
`
const MineCell = styled.div`
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.open === false && css`
    border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128) rgb(245, 245, 245);
    border-style: solid;
    border-width: 2px;
  `}
  ${props => props.open === true && css`
    border-left: 1px solid rgb(128, 128, 128);
    border-top: 1px solid rgb(128, 128, 128);
    background-color: ${props => props.mine === true ? 'red' : 'transparent'};
  `}

  &:target {
    border-left: 1px solid rgb(128, 128, 128);
    border-top: 1px solid rgb(128, 128, 128);
  }

  &:focus {
    outline: 0;
    border: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

const SmileyFaceContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgb(192, 192, 192);
  border-width: 2px;
  border-style: solid;
  border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128) rgb(245, 245, 245);
  outline: currentcolor none medium;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${props => props.isGameOver === true ? DeadSmileImage : SmileImage}) no-repeat center;
  &:hover {
    cursor: pointer;
  }
`

const MineContent = styled.img`

`

const ScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Scores = () => (
  <ScoreBoardContainer>
    {new Array(3).fill(0).map(() => <img src={Score} key={v4()} alt="Score" />)}
  </ScoreBoardContainer>
)
const newBoard = () => {
  const mineArray = minesweeper.generateMineArray({
    rows: DEFAULT_ROWS,
    col: DEFAULT_COLS,
    mines: DEFAULT_MINES
  })
  return new minesweeper.Board(mineArray);
}

class Minesweeper extends React.Component {
    state = {
      board: newBoard()
    }

    resetBoard () {
      this.setState({
        board: newBoard()
      })
    }

    cellOnClick (cell) {
      this.state.board.openCell(cell.x, cell.y)
      this.setState({
        board: this.state.board
      })
    }

    render () {
      const isGameOver = this.state.board.state() === BoardStateEnum.LOST
      const renderCell = (cell) => {
        if(isGameOver && cell.isMine) {
            return <MineContent src={MineBombImage} />
        } else if (cell.state === CellStateEnum.CLOSED) {
          if (cell.flag === CellFlagEnum.NONE) {
            return null
          } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
            return <span>!</span>
          } else if (cell.flag === CellFlagEnum.QUESTION) {
            return <span>?</span>
          }
        } else if(cell.state === CellStateEnum.OPEN) {
          if(cell.isMine) {
            return <MineContent src={MineBombImage} />
          } else if(cell.numAdjacentMines > 0) {
            return <MineContent src={imageLink(`minesweeper/mine-open-${cell.numAdjacentMines}.png`)} />
          } else {
            return null
          }
        } 
      }
      
      const grid = this.state.board.grid();
      return (
        <GameContainer>
          <TopContainer>
            <Scores />
            <SmileyFaceContainer 
              isGameOver={isGameOver}
              onClick={() => this.resetBoard()} />
            <Scores />
          </TopContainer>
          <MineContainer>
            {grid.map((row) => (
              <MineLine key={v4()}>
                {row.map((cell) => (
                  <MineCell
                    key={v4()}
                    open={cell.state === CellStateEnum.OPEN}
                    mine={cell.isMine}
                    onClick={() => this.cellOnClick(cell) }>
                      {renderCell(cell)}
                  </MineCell>
                ))}
              </MineLine>
            ))}
          </MineContainer>
        </GameContainer>
      )
    }
}

export default Minesweeper