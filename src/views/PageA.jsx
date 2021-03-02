import './index.scss'
import { useAppContext } from '../store/reducer'

const PageA = () => {
  const { state, dispatch } = useAppContext()
  return (
    <div className="page a">
      <div className="count">{state.ACount}</div>
      <div className="operation">
        <button onClick={
          () => dispatch({ type: 'pageAAdd', payload: { num: 5 } })}
        >+5</button>
        <button onClick={
          () => dispatch({ type: 'pageASubtract', payload: { num: 2 } })}
        >-2</button>
      </div>
    </div>
  )
}
export default PageA
