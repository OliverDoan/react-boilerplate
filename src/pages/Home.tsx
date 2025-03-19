import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to='/about'>Go to About</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <Button>Click me</Button>
    </div>
  )
}
