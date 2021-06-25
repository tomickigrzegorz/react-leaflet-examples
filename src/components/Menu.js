
import { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../data/menu.json';

const Menu = () => {
  const [id, setId] = useState('');

  return (
    <nav>
      <ul>
        {menu.sort((a, b) => a.text.localeCompare(b.text)).map((item, index) => (
          <li key={item.link} className={index === id ? 'active' : ''}>
            {item.done === 'true' &&
              <Link
                onClick={() => setId(index)}
                to={item.link}>
                {item.text}
              </Link>
            }
            {item.done === 'false' && (
              <div className="not-clickable">
                {item.text}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;