import DisableButton from '../components/Counter/DisableButton'
import DownButton from '../components/Counter/DownButton'
import UpButton from '../components/Counter/UpButton'
import Count from '../components/Counter/Count'

const Counter = () => {

  return (
    <div>
        <DisableButton />

        <UpButton count={3} />

        <UpButton count={1} />

        <Count />

        <DownButton count={1} />
        
        <DownButton count={3} />
    </div>
  )
}

export default Counter