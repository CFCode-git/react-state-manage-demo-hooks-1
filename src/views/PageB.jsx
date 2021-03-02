import { useAppContext } from "../store/reducer"
const PageB = () => {
  const { state, dispatch } = useAppContext()
  return (
    <div className="page b">
      <div className="count">{state.BCount}</div>
      <div className="operation">
        <button onClick={() => { dispatch({ type: 'pageBAdd', payload: { num: 7 } }) }}>+7</button>
        <button onClick={() => { dispatch({ type: 'pageBSubtract', payload: { num: 3 } }) }}>-3</button>
      </div>
    </div>
  )
}
export default PageB