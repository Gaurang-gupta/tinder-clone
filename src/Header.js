import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzKwDXZ4lGpls4ocmtvJO-QQ7bCYFRSIzr59eGLZfmY-9T0nr1sM0rCe6s440A-661I4&usqp=CAU"
                alt=""
            />
            <IconButton>
                <ForumIcon fontSize='large' className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header
