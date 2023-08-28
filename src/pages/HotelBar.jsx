import AppBar from '@mui/material/AppBar';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css'
import { green } from '@mui/material/colors';
function HotelBar() {
  return (
  
    <AppBar position="relative" sx={{background:'white'}}>
    <Toolbar>
{/*       <IconButton
        size='large'
        edge='start'
        color='black'
        aria-label='menu'
        sx={{mr:2}}
      >
        <MenuIcon/>
      </IconButton> */}
      <Typography variant='h7' component='div' sx={{flexGrow:1, color:'black', fontFamily:['Poppins', 'Raleway', 'sans-serif',]}}>
        Casa Bolivar
      </Typography>
      <div className='navlinks'>
        <ul id='menulist'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>about</a>
          </li>
          <li>
            <a href='#rooms'>rooms</a>
          </li>
          <li>
            <a href='#contact'>gallery</a>
          </li>
          <li>
            <Button variant='contained' sx={{background:green[500], "&:hover":{background:green[700]}}} >Book now</Button>
          </li>
        </ul>
      </div>

    </Toolbar>
    </AppBar>


  )
}

export default HotelBar