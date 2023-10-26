import { FaSearch } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      Hello
    </div>
  )
}
