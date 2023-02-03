import RankingPageHooks from "../hooks/RankingPageHooks";

export default function RankingPage() {
  const { rankings } = RankingPageHooks();

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Ranking</h1>
      {rankings.map((ranking) => {
        return (
          <div key={ranking.getCategory()}>
            <h3 className="font-bold text-2xl pt-5 pb-3 px-3">{`Categoría ${ranking.getCategory()}`}</h3>
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      #
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Jugador
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      E1
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      E2
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      E3
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      E4
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      E5
                    </th>
                    <th scope="col" className="py-3 px-6 max-w-[20px]">
                      Pts
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.getRankingRows().map((rankingRow, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="py-4 px-6 max-w-[20px]">{index + 1}</td>
                        <td className="py-4 px-6">
                          {rankingRow.getPlayerName()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getE1()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getE2()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getE3()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getE4()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getE5()}
                        </td>
                        <td className="py-4 px-6 max-w-[20px]">
                          {rankingRow.getScore()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
