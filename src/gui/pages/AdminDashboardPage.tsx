// daos
import { useEffect } from 'react'
import matchDaoCreator from '../../daos/MatchDao'

export default function AdminDashboardPage() {
  
  useEffect(() => {
    const initPage = async () => {
      const matchDao = matchDaoCreator()
      const matches = await matchDao.getMatches()
      console.log(`matches: ${matches.length}`)
    }
    initPage()
  }, [])
  
  return (
    <div>AdminDashboard</div>
  )
}
