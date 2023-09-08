import { useEffect, useState } from 'react'
import Button from './Button'
import SchedulesListItem from './SchedulesListItem'

const SchedulesList = ({ schedules, handleClick, activeSchedule }: any) => {
  if (!schedules.length) return
  const [activeFilter, setActiveFilter] = useState('unretired')
  const [filteredSchedules, setFilteredSchedules] = useState([])

  const filterMap = {
    all: schedules,
    unretired: schedules.filter((schedule) => !schedule.isRetired),
    retired: schedules.filter((schedule) => schedule.isRetired),
  }

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    setFilteredSchedules(filterMap[filter])
  }

  const setInitialScheduleView = async () => {
    schedules.length &&
      setFilteredSchedules(schedules.filter((schedule) => !schedule.isRetired))
  }

  useEffect(() => {
    setInitialScheduleView()
  }, [])

  return (
    <div className="bg-gray-200">
      <div className="sticky top-0 flex justify-between items-center p-4 border-b border-gray-600 bg-gray-200">
        <h1 className="text-3xl">Schedules</h1>
        <div className="space-x-2">
          {['all', 'unretired', 'retired'].map((filter) => (
            <Button
              key={filter}
              isActive={activeFilter === filter}
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      {filteredSchedules &&
        filteredSchedules.map((schedule: any, i: number) => {
          const isActive = activeSchedule === schedule.id
          return (
            <button
              onClick={() => handleClick(schedule.id)}
              className={`p-4 text-left border-b space-y-2 border-gray-600 w-full ${
                isActive ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'
              }`}
              key={`schedule${i}`}
            >
              <SchedulesListItem label="Name" value={schedule.name} />
              <SchedulesListItem
                label="Description"
                value={schedule.description}
              />
              <SchedulesListItem label="ID" value={schedule.id} />
              {activeFilter === 'all' && (
                <SchedulesListItem
                  label="State"
                  value={schedule.isRetired ? 'Retired' : 'Unretired'}
                />
              )}
            </button>
          )
        })}
    </div>
  )
}

export default SchedulesList
