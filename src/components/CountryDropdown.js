import React, { useState, useEffect, useContext } from"react";

//importing icons
import { RiMapPin2Line, RiArrowDropDownLine, RiArrowDropUpLine } from"react-icons/ri";

// import headless ui
import { Menu } from"@headlessui/react";

// import house context
import { HouseContext } from"./HouseContext";

const CountryDropdown= () => {
  const { country, setCountry, countries } =useContext(HouseContext);
  console.log(country);

  const [isOpen, setIsOpen] =useState(false);

  return (
    <Menu as="div"className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() =>setIsOpen(!isOpen)}
      >
        <RiMapPin2Line className="dropdown-icon-primary" />
        <div>
        <div className="text-[15px] font-medium leading-tight">{country}</div>

<div className="text-[13px]">Select your Place</div>
</div>
{isOpen ? (
<RiArrowDropDownLine className="dropdown-icon-secondary" />
) : (
<RiArrowDropUpLine className="dropdown-icon-secondary" />
)}
</Menu.Button>

<Menu.Items className='dropdown-menu'>
{countries.map((country, index) => {
return (
  <Menu.Item
    onClick={() =>setCountry(country)}
    className="cursor-pointer hover:text-violet-700 transition"
    as="li"
    key={index}
  >
    {country}
  </Menu.Item>
);
})}
</Menu.Items>
</Menu>
);
};

export default CountryDropdown;
