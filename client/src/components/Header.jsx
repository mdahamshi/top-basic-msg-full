
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {SendHorizontal} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { links } from '../assets/links';

export default function Component() {
    const { appName } = useApp();

  return (
    <Navbar    rounded>
      <NavbarBrand href="#">
       <SendHorizontal className="size-14 mr-5 stroke-primary"  />
        <span className="self-center text-primary  whitespace-nowrap text-4xl font-semibold ">{appName}</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="">
           {links.map((link) => (
            <NavbarLink key={link.id} href={`/${link.id === 'home' ? '#' : link.id}`}>
              {link.text}
            </NavbarLink>
           ))}
      </NavbarCollapse>
    </Navbar>
  );
}
