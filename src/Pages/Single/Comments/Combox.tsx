

function ComBox(props: { comment: string, user: { username: string }, date: Date }) {
    const date = new Date(props.date)
    const datem = date.getTime()
    const now: number = Date.now() - datem
    function timeSince() {
      const seconds = Math.floor(now / 1000);
      let interval = seconds / 31536000;
      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }
  return (
    <div className="w-full h-auto justify-center items-start flex flex-col bg-slate-400" >
      <div className="w-full flex items-center justify-between flex-row ">
        <div className="flex flex-row items-center">
          <div style={{
                backgroundImage:
                `url('https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg')`,
            }}  className="w-8 h-8 bg-cover bg-center rounded-full m-1"></div> 
          <p className="text-xs font-semibold italic">{props.user.username}</p>
        </div>
        <div className="block text-xs p-2 italic text-gray-800/50">{timeSince()} ago</div>
      </div>
      <div className=" w-5/6 pl-5 p-2">
        <p className="text-sm pl-2 border-l-2 border-slate-900/50">
          {props.comment}
        </p>
      </div>
    </div>
  )
}

export default ComBox