import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';

const NavbarComp = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none" color="indigo" variant="gradient">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography as="a" href="/" variant="small" className="mr-4 cursor-pointer py-1.5 text-[24px] font-semibold">
          <span>Open AI Image Generator</span>
        </Typography>
        <Typography variant="small" color="white" className="p-1 font-normal text-[16px] hidden lg:inline-block">
          <a href="https://beta.openai.com/docs/guides/images" className="flex items-center" target="_blank" rel="noreferrer noopener">
            Open AI Docs
          </a>
        </Typography>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <hr className="my-4" />
        <Typography variant="small" color="white" className="p-2 font-normal text-[16px]">
          <a href="https://beta.openai.com/docs/guides/images" className="flex items-center" target="_blank" rel="noreferrer noopener">
            Open AI Docs
          </a>
        </Typography>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComp;
