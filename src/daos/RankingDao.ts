// entities
import Ranking from '../entities/Ranking'
import RankingRow from '../entities/RankingRow'

export default function rankingDao(){

    async function getRankings() {
        const result = [
            new Ranking('A', [
                new RankingRow('M. Ubilla', 100, 8, 0, 0, 0),
                new RankingRow('O. Pérez', 60, 0, 0, 0, 0),
                new RankingRow('C. Obregón', 35, 18, 0, 0, 0),
                new RankingRow('M. Pribaz', 35, 0, 0, 0, 0),
                new RankingRow('M. Marella', 18, 18, 0, 0, 0),
                new RankingRow('N. Arrieta', 18, 8, 0, 0, 0),
                new RankingRow('A. Guelfi', 18, 8, 0, 0, 0),
                new RankingRow('L. Giovanetti', 18, 0, 0, 0, 0),
                new RankingRow('J. Macadma', 0, 35, 0, 0, 0),
                new RankingRow('M. Llul', 0, 35, 0, 0, 0),
                new RankingRow('I. Rodríguez', 0, 18, 0, 0, 0),
                new RankingRow('D. Acevedo', 0, 18, 0, 0, 0),
                new RankingRow('W. Zeinal', 0, 8, 0, 0, 0),
                new RankingRow('L. Sanguinetti', 0, 8, 0, 0, 0),
                new RankingRow('A. Karabelnik', 0, 8, 0, 0, 0),
                new RankingRow('R. Da Costa', 0, 100, 0, 0, 0),
                new RankingRow('F. Viera', 0, 60, 0, 0, 0)
            ], ),
            new Ranking('B', [
                new RankingRow('F. Nateri', 100, 0, 0, 0, 0),
                new RankingRow('J. Arias', 60, 60, 0, 0, 0),
                new RankingRow('D. Cáceres', 35, 0, 0, 0, 0),
                new RankingRow('N. Arrieta', 35, 8, 0, 0, 0),
                new RankingRow('A. Ribeiro', 18, 0, 0, 0, 0),
                new RankingRow('J. Suárez', 18, 0, 0, 0, 0),
                new RankingRow('O. Maresca', 18, 2, 0, 0, 0),
                new RankingRow('S. Sánchez', 18, 2, 0, 0, 0),
                new RankingRow('F. Cadilla', 8, 0, 0, 0, 0),
                new RankingRow('D. Bordegaray', 8, 0, 0, 0, 0),
                new RankingRow('M. Midowik', 8, 0, 0, 0, 0),
                new RankingRow('G. Quirque', 8, 2, 0, 0, 0),
                new RankingRow('M. Alonso', 8, 8, 0, 0, 0),
                new RankingRow('R. Gomensoro', 8, 2, 0, 0, 0),
                new RankingRow('J. I. Ferrari', 8, 8, 0, 0, 0),
                new RankingRow('M. Serra', 8, 0, 0, 0, 0),
                new RankingRow('E. Edjen', 2, 2, 0, 0, 0),
                new RankingRow('R. Labanca', 2, 0, 0, 0, 0),
                new RankingRow('L. Sanguinetti', 2, 8, 0, 0, 0),
                new RankingRow('N. Zambrano', 2, 2, 0, 0, 0),
                new RankingRow('F. Portillo', 2, 8, 0, 0, 0),
                new RankingRow('M. Méndez', 2, 2, 0, 0, 0),
                new RankingRow('J. Morales', 2, 18, 0, 0, 0),
                new RankingRow('M. Cantera', 2, 0, 0, 0, 0),
                new RankingRow('D. Beloqui', 2, 2, 0, 0, 0),
                new RankingRow('M. Viola', 2, 2, 0, 0, 0),
                new RankingRow('W. Zeinal', 2, 2, 0, 0, 0),
                new RankingRow('M. Lauz', 2, 2, 0, 0, 0),
                new RankingRow('F. Rodríguez', 2, 0, 0, 0, 0),
                new RankingRow('I. Rodríguez', 0, 100, 0, 0, 0),
                new RankingRow('D. Acevedo', 0, 35, 0, 0, 0),
                new RankingRow('D. Cleffi', 0, 35, 0, 0, 0),
                new RankingRow('E. Núñez', 0, 18, 0, 0, 0),
                new RankingRow('G. Dol', 0, 18, 0, 0, 0),
                new RankingRow('R. Álvarez', 0, 18, 0, 0, 0),
                new RankingRow('F. Márquez', 0, 8, 0, 0, 0),
                new RankingRow('J. A. Suárez', 0, 8, 0, 0, 0),
                new RankingRow('M. López', 0, 8, 0, 0, 0),
                new RankingRow('A. Xivillier', 0, 2, 0, 0, 0),
                new RankingRow('J. Rodríguez', 0, 2, 0, 0, 0),
                new RankingRow('F. Shusho', 0, 2, 0, 0, 0),
                new RankingRow('A. Karabelnik', 0, 2, 0, 0, 0)
            ]),
            new Ranking('C', [
                new RankingRow('F. Portillo', 100, 0, 0, 0, 0),
                new RankingRow('J. J. Cetraro', 60, 8, 0, 0, 0),
                new RankingRow('G. Gianero', 35, 8, 0, 0, 0),
                new RankingRow('M. Bardesio', 35, 2, 0, 0, 0),
                new RankingRow('D. Ramos', 18, 0, 0, 0, 0),
                new RankingRow('A. Rodríguez', 18, 8, 0, 0, 0),
                new RankingRow('Y. Rajab', 18, 2, 0, 0, 0),
                new RankingRow('F. Cerda', 18, 0, 0, 0, 0),
                new RankingRow('J. Suárez', 8, 60, 0, 0, 0),
                new RankingRow('M. Laguna', 8, 2, 0, 0, 0),
                new RankingRow('M. Correa', 8, 18, 0, 0, 0),
                new RankingRow('N. D\'Angelo', 8, 18, 0, 0, 0),
                new RankingRow('D. Bordegaray', 8, 0, 0, 0, 0),
                new RankingRow('C. Folle', 8, 2, 0, 0, 0),
                new RankingRow('J. A. Díaz', 8, 2, 0, 0, 0),
                new RankingRow('C. Rossi', 8, 0, 0, 0, 0),
                new RankingRow('V. Crosa', 2, 2, 0, 0, 0),
                new RankingRow('P. Milburn', 2, 2, 0, 0, 0),
                new RankingRow('S. Facchín', 2, 2, 0, 0, 0),
                new RankingRow('J. I. Romero', 2, 8, 0, 0, 0),
                new RankingRow('M. Cantera', 2, 35, 0, 0, 0),
                new RankingRow('M. Aguilar', 2, 0, 0, 0, 0),
                new RankingRow('V. Passanante', 2, 2, 0, 0, 0),
                new RankingRow('F. Álvarez', 2, 2, 0, 0, 0),
                new RankingRow('J. Montano', 2, 0, 0, 0, 0),
                new RankingRow('B. Farías', 2, 18, 0, 0, 0),
                new RankingRow('F. Márquez', 2, 0, 0, 0, 0),
                new RankingRow('M. Álvez', 2, 0, 0, 0, 0),
                new RankingRow('R. Labanca', 2, 0, 0, 0, 0),
                new RankingRow('D. Cleffi', 0, 100, 0, 0, 0),
                new RankingRow('M. Lauz', 0, 35, 0, 0, 0),
                new RankingRow('B. De Mattos', 0, 18, 0, 0, 0),
                new RankingRow('L. Moreno', 0, 8, 0, 0, 0),
                new RankingRow('J. Pereira', 0, 8, 0, 0, 0),
                new RankingRow('D. Behar', 0, 8, 0, 0, 0),
                new RankingRow('N. Curioni', 0, 2, 0, 0, 0),
                new RankingRow('F. Shusho', 0, 2, 0, 0, 0),
                new RankingRow('M. Chiesa', 0, 2, 0, 0, 0),
                new RankingRow('M. Patrone', 0, 2, 0, 0, 0),
                new RankingRow('B. Passadore', 0, 2, 0, 0, 0),
                new RankingRow('M. Ferreira', 0, 2, 0, 0, 0)
            ]),
            new Ranking('D', [
                new RankingRow('M. Laguna', 100, 18, 0, 0, 0),
                new RankingRow('J. I. Romero', 60, 18, 0, 0, 0),
                new RankingRow('B. Farías', 35, 18, 0, 0, 0),
                new RankingRow('I. Ponce', 35, 18, 0, 0, 0),
                new RankingRow('S. Facchín', 18, 2, 0, 0, 0),
                new RankingRow('A. Montaner', 18, 0, 0, 0, 0),
                new RankingRow('V. Passanante', 18, 0, 0, 0, 0),
                new RankingRow('P. Medrano', 18, 0, 0, 0, 0),
                new RankingRow('G. Mesorio', 8, 2, 0, 0, 0),
                new RankingRow('A. Abella', 8, 0, 0, 0, 0),
                new RankingRow('J. Calvo', 8, 8, 0, 0, 0),
                new RankingRow('L. Moreno', 8, 2, 0, 0, 0),
                new RankingRow('M. Richly', 8, 60, 0, 0, 0),
                new RankingRow('A. Da Silva', 8, 0, 0, 0, 0),
                new RankingRow('M. Bardesio', 8, 2, 0, 0, 0),
                new RankingRow('M. Moreira', 8, 8, 0, 0, 0),
                new RankingRow('D. Behar', 2, 2, 0, 0, 0),
                new RankingRow('J. Montano', 2, 0, 0, 0, 0),
                new RankingRow('D. Sieradski', 2, 0, 0, 0, 0),
                new RankingRow('A. Piccolo', 2, 2, 0, 0, 0),
                new RankingRow('F. Scalone', 2, 2, 0, 0, 0),
                new RankingRow('M. Aguilar', 2, 2, 0, 0, 0),
                new RankingRow('C. Grandjean', 2, 2, 0, 0, 0),
                new RankingRow('J. Rosales', 2, 2, 0, 0, 0),
                new RankingRow('M. Patrone', 2, 2, 0, 0, 0),
                new RankingRow('J. A. Díaz', 2, 100, 0, 0, 0),
                new RankingRow('F. Facchín', 2, 2, 0, 0, 0),
                new RankingRow('F. Cerda', 2, 2, 0, 0, 0),
                new RankingRow('R. Flores', 2, 2, 0, 0, 0),
                new RankingRow('S. Maidana', 2, 0, 0, 0, 0),
                new RankingRow('A. Alori', 2, 8, 0, 0, 0),
                new RankingRow('B. De Mattos', 0, 35, 0, 0, 0),
                new RankingRow('D. Castiglioni', 0, 35, 0, 0, 0),
                new RankingRow('D. Fernández', 0, 8, 0, 0, 0),
                new RankingRow('J. Muscoso', 0, 8, 0, 0, 0),
                new RankingRow('M. Sivori', 0, 8, 0, 0, 0),
                new RankingRow('J. Pereira', 0, 8, 0, 0, 0),
                new RankingRow('L. Bruzzone', 0, 8, 0, 0, 0),
                new RankingRow('D. Aundi', 0, 2, 0, 0, 0),
                new RankingRow('P. Baccareza', 0, 2, 0, 0, 0),
                new RankingRow('Y. Estranil', 0, 2, 0, 0, 0),
                new RankingRow('G. Caimo', 0, 2, 0, 0, 0),
                new RankingRow('P. Milburn', 0, 2, 0, 0, 0),
                new RankingRow('M. Ceretta', 0, 2, 0, 0, 0),
                new RankingRow('M. Fun', 0, 2, 0, 0, 0),
                new RankingRow('R. Lemos', 0, 2, 0, 0, 0),
                new RankingRow('B. Pascaretta', 0, 2, 0, 0, 0),
                new RankingRow('D. Signorelli', 0, 2, 0, 0, 0),
                new RankingRow('D. Boutmy', 0, 2, 0, 0, 0),
                new RankingRow('G. Vitali', 0, 2, 0, 0, 0),
                new RankingRow('A. Nápoli', 0, 2, 0, 0, 0),
                new RankingRow('H. Pérez', 0, 2, 0, 0, 0)
            ]),
            new Ranking('E', [
                new RankingRow('M. Patrone', 100, 0, 0, 0, 0),
                new RankingRow('J. M. Presno', 60, 0, 0, 0, 0),
                new RankingRow('I. Ponce', 35, 100, 0, 0, 0),
                new RankingRow('G. Bastón', 35, 2, 0, 0, 0),
                new RankingRow('A. Da Silva', 18, 0, 0, 0, 0),
                new RankingRow('F. Gómez', 18, 0, 0, 0, 0),
                new RankingRow('F. Bouza', 18, 2, 0, 0, 0),
                new RankingRow('A. Abella', 18, 2, 0, 0, 0),
                new RankingRow('J. P. Melián', 8, 8, 0, 0, 0),
                new RankingRow('M. Pereira', 8, 8, 0, 0, 0),
                new RankingRow('I. Obregón', 8, 0, 0, 0, 0),
                new RankingRow('M. Moreira', 8, 0, 0, 0, 0),
                new RankingRow('D. Signorelli', 8, 0, 0, 0, 0),
                new RankingRow('F. Facchín', 8, 0, 0, 0, 0),
                new RankingRow('M. Ceretta', 8, 0, 0, 0, 0),
                new RankingRow('C. Grandjean', 8, 18, 0, 0, 0),
                new RankingRow('C. Martínez', 2, 0, 0, 0, 0),
                new RankingRow('M. Solari', 2, 0, 0, 0, 0),
                new RankingRow('R. Flores', 2, 2, 0, 0, 0),
                new RankingRow('E. Lanaro', 2, 0, 0, 0, 0),
                new RankingRow('F. Perdomo', 2, 0, 0, 0, 0),
                new RankingRow('H. Voituret', 2, 2, 0, 0, 0),
                new RankingRow('D. Behar', 2, 0, 0, 0, 0),
                new RankingRow('C. Pernas', 2, 0, 0, 0, 0),
                new RankingRow('T. Rosas', 2, 18, 0, 0, 0),
                new RankingRow('G. Hormaeche', 2, 0, 0, 0, 0),
                new RankingRow('G. Arias', 2, 0, 0, 0, 0),
                new RankingRow('M. Casamayou', 2, 0, 0, 0, 0),
                new RankingRow('F. Scalone', 2, 2, 0, 0, 0),
                new RankingRow('F. Delgado', 0, 60, 0, 0, 0),
                new RankingRow('R. Lagomarsino', 0, 60, 0, 0, 0),
                new RankingRow('M. Cardone', 0, 35, 0, 0, 0),
                new RankingRow('E. Martínez', 0, 18, 0, 0, 0),
                new RankingRow('G. Mesorio', 0, 18, 0, 0, 0),
                new RankingRow('J. Seré', 0, 8, 0, 0, 0),
                new RankingRow('A. Nápoli', 0, 8, 0, 0, 0),
                new RankingRow('A. Maggiari', 0, 8, 0, 0, 0),
                new RankingRow('A. Piccolo', 0, 8, 0, 0, 0),
                new RankingRow('G. Vitali', 0, 8, 0, 0, 0),
                new RankingRow('M. Sivori', 0, 8, 0, 0, 0),
                new RankingRow('H. Pérez', 0, 2, 0, 0, 0),
                new RankingRow('L. Rospide', 0, 2, 0, 0, 0),
                new RankingRow('L. Varela', 0, 2, 0, 0, 0),
                new RankingRow('L. Martínez', 0, 2, 0, 0, 0),
                new RankingRow('D. Boutmy', 0, 2, 0, 0, 0),
                new RankingRow('M. Bonomi', 0, 2, 0, 0, 0),
                new RankingRow('L. Pucciano', 0, 2, 0, 0, 0),
                new RankingRow('J. Muscoso', 0, 2, 0, 0, 0),
                new RankingRow('D. Zuccino', 0, 2, 0, 0, 0),
                new RankingRow('R. Santamaría', 0, 2, 0, 0, 0)
            ])
        ]

        for(let i = 0; i < result.length; i++){
            result[i].getRankingRows().sort((row1, row2) => {
                return row2.getScore() - row1.getScore()
            })
        }

        return result
    }


    
    return Object.freeze({ 
        getRankings
    });
}