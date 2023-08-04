import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Collapse from '@mui/material/Collapse'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isGenreOpen, setGenreOpen] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleGenreClick = () => {
    setGenreOpen(!isGenreOpen);
  }

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push({
      pathname: '/searchmovies',
      query: { q: query },
    });
  };

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/account">My Account</Link></MenuItem>
        <MenuItem onClick={handleGenreClick}>Genre</MenuItem>
        <Collapse in={isGenreOpen}>
          <div className="w-72 grid grid-cols-2 gap-0 ">
            <MenuItem>
              <div className="hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/action.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/action">Action</Link>
              </div>
            </MenuItem>
            
            <MenuItem>
              <div className=" hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/crime.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/crime">Crime</Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div className=" hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/adventure.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/adventure">Adventure</Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div className=" hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/fantasy.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/fantasy">Fantasy</Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div className=" hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/drama.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/drama">Drama</Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div className=" hover:underline cursor-pointer flex inline text-xs font-light text-gray-300">
                <img src="/horror.png" width="16px" height="16px"
                    className="cursor-pointer object-contain ml-1 mr-2"/>
                <Link href="/horror">Horror</Link>
              </div>
            </MenuItem>
          </div>
        </Collapse>
        <MenuItem onClick={handleClose}><Link href="/news">News</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/mylist">My List</Link></MenuItem>
      </Menu>
    </div>
  );
}



