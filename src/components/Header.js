const Header = (props) => {
    const {score, setScore, highscore, setHighscore} = props

    return <div className="header"> <h1>MEMORY GAME</h1>
        <p>Current Score: {score}</p>
        <p>High Score: {highscore}</p>
    </div>
}

export default Header