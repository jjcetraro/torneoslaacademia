export default class RankingRow {

    private position: number
    private playerName: string
    private score: number

    constructor(position: number, playerName: string, score: number){
        this.position = position
        this.playerName = playerName
        this.score = score
    }

    getPosition() { return this.position }
    setPosition(position: number) { this.position = position }

    getPlayerName() { return this.playerName }
    setPlayerName(playerName: string) { this.playerName = playerName }

    getScore() { return this.score }
    setScore(score: number) { this.score = score }

    clone() {
        return new RankingRow(
            this.getPosition(),
            this.getPlayerName(),
            this.getScore()
        )
    }
}