import { useSelector } from "react-redux"

const Main = () => {

  const {user} = useSelector(state => state.auth)


  return (
    <div>
      Main { user !== null && user.username}
    </div>
  )
}

export default Main