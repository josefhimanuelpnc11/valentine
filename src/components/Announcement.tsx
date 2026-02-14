type AnnouncementProps = {
  message: string
}

function Announcement({ message }: AnnouncementProps) {
  return (
    <p className="announcement" aria-live="polite" role="status">
      {message}
    </p>
  )
}

export default Announcement
