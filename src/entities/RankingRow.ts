export default class RankingRow {

    private playerName: string
    private e1: number
    private e2: number
    private e3: number
    private e4: number
    private e5: number

    constructor(playerName: string, e1: number, e2: number, e3: number, e4: number, e5: number){
        this.playerName = playerName
        this.e1 = e1
        this.e2 = e2
        this.e3 = e3
        this.e4 = e4
        this.e5 = e5
    }

    getPlayerName() { return this.playerName }
    setPlayerName(playerName: string) { this.playerName = playerName }

    getE1() { return this.e1 }
    setE1(e1: number) { this.e1 = e1 }

    getE2() { return this.e2 }
    setE2(e2: number) { this.e2 = e2 }

    getE3() { return this.e3 }
    setE3(e3: number) { this.e3 = e3 }

    getE4() { return this.e4 }
    setE4(e4: number) { this.e4 = e4 }

    getE5() { return this.e5 }
    setE5(e5: number) { this.e5 = e5 }

    getScore() { return this.e1 + this.e2 + this.e3 + this.e4 + this.e5 }

    clone() {
        return new RankingRow(
            this.getPlayerName(),
            this.getE1(),
            this.getE2(),
            this.getE3(),
            this.getE4(),
            this.getE5()
        )
    }
}