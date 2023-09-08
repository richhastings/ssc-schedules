import { useEffect, useState } from 'react'
import ScheduleViewerItem from './ScheduleViewerItem'
import Button from './Button'

const ScheduleViewer = ({ scheduleLogs, activeSchedule }) => {
  // if (!scheduleLogs.length) return

  if (!scheduleLogs.length)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Select a schedule
      </div>
    )

  console.log(111, activeSchedule)

  return (
    <div>
      <div className="sticky top-0 p-4 bg-white border-b border-gray-600">
        <h1 className="text-3xl">Logs for {activeSchedule.name}</h1>
      </div>
      <div className="p-4 space-y-4">
        {scheduleLogs &&
          scheduleLogs.map((log) => <ScheduleViewerItem data={log} />)}
      </div>
    </div>
  )
}

export default ScheduleViewer
