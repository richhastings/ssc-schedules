import { useState, useEffect } from 'react'
import SchedulesList from '../src/components/SchedulesList'
import ScheduleViewer from '../src/components/ScheduleViewer'

const Home = () => {
  const [schedules, setSchedules] = useState([])
  const [scheduleLogs, setScheduleLogs] = useState([])

  const [activeSchedule, setActiveSchedule] = useState(0)
  const [activeScheduleLogs, setActiveScheduleLogs] = useState([])

  const updateScheduleView = (id: number) => {
    setActiveScheduleLogs(
      scheduleLogs.filter((scheduleLog) => scheduleLog.scheduleId === id)
    )
    setActiveSchedule(id)
  }

  useEffect(() => {
    const getData = async () => {
      const schedulesRes = await fetch('http://localhost:4000/schedules')
      const schedulesJson = await schedulesRes.json()
      setSchedules(schedulesJson)
      const scheduleLogsRes = await fetch('http://localhost:4000/scheduleLogs')
      const schedulesLogsJson = await scheduleLogsRes.json()
      setScheduleLogs(schedulesLogsJson)
    }

    getData()
  }, [])

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 h-screen overflow-auto border-r border-gray-600">
        <SchedulesList
          handleClick={(id) => updateScheduleView(id)}
          schedules={schedules}
          activeSchedule={activeSchedule}
        />
      </div>
      <div className="col-span-3 sticky top-0 overflow-auto h-screen">
        <ScheduleViewer
          activeSchedule={
            schedules.filter((schedule) => schedule.id === activeSchedule)[0]
          }
          scheduleLogs={activeScheduleLogs}
        />
      </div>
    </div>
  )
}

export default Home
