import { FC, memo } from "react"

interface IProps {
  name: string
}

const UserComponent: FC<IProps> = memo(props => {
  const { name } = props
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
})

UserComponent.displayName = "UserComponent"

export default UserComponent
