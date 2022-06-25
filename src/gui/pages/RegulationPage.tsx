export default function RegulationPage() {
  return (
    <>
      <h1>Reglamento</h1>
      <h3 className='mt-5 mb-4'>Modalidad de Juego</h3>
      <p>Los partidos son a 2 sets, y en caso de ganar un set cada jugador, se jugará un super tiebreak a morir a 10 para determinar el ganador del partido.</p>
      <p>Se aplicará el Walk Over pasados 15 minutos de la hora fijada del encuentro.</p>
      <p>Solicitamos a todos los jugadores realizar el calentamiento antes de los partiods. Se podrá calentar en cancha solo 5 minutos.</p>
      <p>Se jugará sin ventaja. Cuando se llegue a 40/40, se jugará punto de oro. El receptor podrá elegir donde quiere recibir el saque.</p>
      <h3 className='mt-5 mb-4'>Ranking Anual</h3>
      <p>
        Hay un Ranking Anual para cada una de las categorías. A lo largo del año, hay torneos en cada categoría que permiten a los jugadores sumar puntos para el Ranking Anual. Se utiliza el mismo sistema de puntuación que utiliza ATP para los torneos Challenger 100:
      </p>
      <table>
        <thead>
          <tr><th>Instancia</th><th>Puntos</th></tr>
        </thead>
        <tbody>
          <tr><td>Ganador</td><td>100</td></tr>
          <tr><td>Segundo</td><td>60</td></tr>
          <tr><td>Semifinalista</td><td>35</td></tr>
          <tr><td>Cuartos de Final</td><td>18</td></tr>
          <tr><td>R16</td><td>8</td></tr>
          <tr><td>R32 o menos</td><td>2</td></tr>
        </tbody>
      </table>
      <h3 className='mt-5 mb-4'>Copa Master</h3>
      <p>
        Al final del año se realiza una Copa Master para cada categoría, con los 8 mejores clasificados en el Ranking Anual de esa categoría. En caso de que alguno de los clasificados no pueda jugar la Copa Master, se invitará al siguiente jugador en el Ranking Anual. Así hasta conseguir 8 jugadores que jueguen la copa.
      </p>
      <p>
        La modalidad de juego de la Copa Master es igual a la de los demás torneos. Se arma un cuadro con 8 jugadores, y se juegan cuartos, semis y final. Los primeros 4 jugadores de la Copa serán sembrados según su posición en el Ranking Anual, y los otros 4 serán ubicados por sorteo.
      </p>
      <p>
        En caso de que haya más de un jugador con el mismo puntaje clasificados para la Copa Master, los criterios de desempate utilizados (en orden) serán los siguientes:
      </p>
      <ol>
        <li><strong>Cantidad de torneos jugados:</strong> El jugador que haya jugado menos torneos dentro de la categoría quedará arriba en la clasificación a la Copa Master. Si logró hacer los mismos puntos en menos torneos, significa que logró hacer más puntos por torneo.</li>
        <li><strong>Mejor fase alcanzada:</strong> El jugador que haya logrado llegar lo más lejos posible en un torneo. Por ejemplo, si tenemos dos jugadores empatados, pero uno de ellos llegó a semifinales de algún torneo y el otro no, el que haya llegado a semifinales será el que acabará arriba en la clasificación a la Copa Master. En caso de que los dos hayan alcanzado la misma fase a lo largo del año, se priorizará al que alcanzó más veces dicha fase.</li>
        <li><strong>Partidos entre ellos:</strong> En caso de que se hayan enfrentado por torneo durante el año, se tomará en cuenta cómo salieron en dichos partidos. Solo se tomará en cuenta quién ganó el partido, no se tomará en cuenta el resultado (por cuánto ganó).</li>
        <li><strong>Sorteo:</strong> En caso de que luego de aplicar todos estos criterios el empate persista, se hará un sorteo para definir quien queda arriba en la clasificación a la Copa Master.</li>
      </ol>
    </>
  )
}
