import RankingRow from "./RankingRow"

export default class Ranking {

    private category: string
    private rankingRows: RankingRow[]

    constructor(category: string, rankingRows: RankingRow[]){
        this.category = category
        this.rankingRows = rankingRows
    }

    getCategory() { return this.category }
    getRankingRows() { return this.rankingRows }
}