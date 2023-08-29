import AppBar from '@mui/material/AppBar';
import { Button, IconButton, Toolbar, Typography,Box, Divider,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css'
import { green } from '@mui/material/colors';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Rooms','Gallery'];

function HotelBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}} >
      <Typography variant='h6' sx={{my:2}}>
        Casa Bolivar
      </Typography>
      <Divider/>
{/* 
          {navItems.map((item)=>(
            <div className='navlinks' key={item}>
        <ul id='menulist'>
            <il key={item}>
            <a href='# ${`item`}'>{item}</a>
            </il>
            </ul>
      </div>
          ))} */}

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="relative" sx={{background:'white'}}>
        <Toolbar>
{/*           <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>*/}
          <Typography variant='h7' component='div' sx={{flexGrow:1, color:'black', fontFamily:['Poppins', 'Raleway', 'sans-serif',]}}
          >
            Casa Bolivar
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{flexGrow:1, color:'black', fontFamily:['Poppins', 'Raleway', 'sans-serif',]}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
/*   return (
  
    <AppBar position="relative" sx={{background:'white'}}>
    <Toolbar>
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
  */
}

export default HotelBar