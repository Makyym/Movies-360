import clsx from 'clsx';
import { RiMovie2AiLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-4 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold">
        <RiMovie2AiLine className="text-red-600 w-7 h-7 mr-2" />
        <span>Screen360</span>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center items-center gap-[12px] border-4 border-[#1f1f1f] rounded-[12px] px-[40px] py-[10px] w-[586px] bg-[#0f0f0f]">
        {[
          { to: '/', label: 'Home' },
          { to: '/movies', label: 'Search' },
          { to: '/favourites', label: 'Favorites' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'text-[18px] w-[183px] h-[30px] flex items-center justify-center leading-[1.5] font-normal text-[#bfbfbf]',
                'hover:text-shadow-redGlow',
                isActive &&
                  'text-white bg-[#1a1a1a] rounded-[8px] border border-[#1a1a1a] font-medium hover:text-shadow-none',
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="text-white text-xl">🔍</button>
        <button className="text-white text-xl">🔔</button>
      </div>
    </header>
  );
};

export default Navigation;
