import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  Button,
} from 'flowbite-react';
import { Link } from 'react-router-dom';

import { SendHorizontal, Eclipse } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { links } from '../assets/links';

export default function Component() {
  const { appName, toggleTheme } = useApp();

  return (
    <Navbar className="sticky z-5 shadow-md  top-0">
      <div className="flex items-center w-full gap-8 justify-start">
        <NavbarBrand href="#">
          <SendHorizontal className="size-14 mr-5 stroke-primary" />
          <span className="self-center text-primary  whitespace-nowrap text-4xl font-semibold ">
            {appName}
          </span>
        </NavbarBrand>
        <div className="flex w-full items-center justify-between">
          <NavbarCollapse className="">
            {links.map((link) => (
              <Link
                className="dark:text-white"
                key={link.id}
                to={`/${link.id === 'home' ? '#' : link.id}`}
              >
                {link.text}
              </Link>
            ))}
          </NavbarCollapse>
          <Button onClick={toggleTheme} className="btn-primary">
            <Eclipse className="dark:stroke-white" />
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
