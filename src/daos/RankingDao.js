// entities
import Ranking from '../entities/Ranking'

// daos
import playerDaoCreator from './PlayerDao';

export default function rankingDao(){

    async function getRankings() {
        const playerDao = playerDaoCreator()
        return [
            new Ranking('A', [
                await playerDao.getPlayerById('1'),
                await playerDao.getPlayerById('2'),
                await playerDao.getPlayerById('3'),
                await playerDao.getPlayerById('4')
            ]),
            new Ranking('B', [
                await playerDao.getPlayerById('3'),
                await playerDao.getPlayerById('4'),
                await playerDao.getPlayerById('5'),
                await playerDao.getPlayerById('6')
            ]),
            new Ranking('C', [
                await playerDao.getPlayerById('5'),
                await playerDao.getPlayerById('6'),
                await playerDao.getPlayerById('7'),
                await playerDao.getPlayerById('8')
            ]),
            new Ranking('D', [
                await playerDao.getPlayerById('7'),
                await playerDao.getPlayerById('8'),
                await playerDao.getPlayerById('9'),
                await playerDao.getPlayerById('10')
            ]),
            new Ranking('E', [
                await playerDao.getPlayerById('9'),
                await playerDao.getPlayerById('10'),
                await playerDao.getPlayerById('11'),
                await playerDao.getPlayerById('12')
            ])
        ]
    }


    
    return Object.freeze({ 
        getRankings
    });
}