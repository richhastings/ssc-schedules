import { format } from 'date-fns'

const ScheduleViewerSubItem = ({ label, value, className }: any) => (
  <div className={className}>
    <div className="text-xs text-gray-600">{label}:</div>
    <div>{value}</div>
  </div>
)

const ScheduleViewerItem = ({ data }: any) => {
  const startTime = format(new Date(data.startTime), 'do LLLL yyyy hh:mm:ss')
  const endTime = format(new Date(data.endTime), 'do LLLL yyyy hh:mm:ss')

  const backgroundMap: any = {
    Completed: 'bg-green-600',
    Terminated: 'bg-red-600',
    Running: 'bg-yellow-600',
    Pending: 'bg-gray-400',
    Exception: 'bg-gray-400',
  }

  return (
    <div
      className={`border-gray-600 border p-2 grid grid-cols-6 gap-4 ${
        backgroundMap[data.status]
      }`}
    >
      <ScheduleViewerSubItem label="ID" value={data.id} />
      <ScheduleViewerSubItem
        label="Duration"
        value={`${startTime} - ${endTime}`}
        className="col-span-3"
      />
      <ScheduleViewerSubItem label="Status" value={data.status} />
      <ScheduleViewerSubItem label="Server Name" value={data.serverName} />
    </div>
  )
}

export default ScheduleViewerItem
