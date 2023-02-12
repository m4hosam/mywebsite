import logo from '../assets/logo.png';
import resume from "../assets/resume.pdf"
import Button from '@mui/material/Button';
import { COLORS } from "../Colors"

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
    return (
        <div className='fixed z-50 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36' style={{ background: '#000' }}>
            <div className="flex justify-between items-center text-white">
                <img src={logo} className="App-logo w-14 rounded-full" alt="logo" />
                <ul className="hidden md:flex">
                    {navItems.map((item) => (
                        <li key={item} className="p-4">
                            <Button href={"#" + item} key={item} sx={{
                                px: 2,
                                textTransform: 'none',
                                color: COLORS.white, backgroundColor: COLORS.black1,
                                ':hover': {
                                    bgcolor: COLORS.black3,
                                }
                            }}>
                                {item}
                            </Button>
                        </li>
                    ))}
                </ul>
                <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Resume</a>
            </div>
        </div >
    )
}