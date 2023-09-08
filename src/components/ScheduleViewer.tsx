import ScheduleViewerItem from './ScheduleViewerItem'

const ScheduleViewer = ({ scheduleLogs, activeSchedule }) => {
  if (!scheduleLogs.length)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Select a schedule
      </div>
    )

  return (
    <div>
      <div className="sticky top-0 p-4 bg-white border-b border-gray-600">
        <h1 className="text-3xl">Logs for {activeSchedule.name}</h1>
      </div>
      <div className="p-4 space-y-4">
        {scheduleLogs &&
          scheduleLogs.map((log, i) => (
            <ScheduleViewerItem key={`item${i}`} data={log} />
          ))}
      </div>
    </div>
  )
}

export default ScheduleViewer
