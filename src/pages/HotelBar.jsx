import AppBar from '@mui/material/AppBar';
import { Button, IconButton, Toolbar, Typography,Box, Divider,Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/style.css'
import { green } from '@mui/material/colors';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Rooms','Gallery'];

function HotelBar(props) {
const [t,i18n] = useTranslation('global');
const handleChangeLanguage = (lang)=>{
  i18n.changeLanguage(lang)
}
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

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="relative" sx={{background:'white'}}>
        <Toolbar>

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
            <button onClick={()=>handleChangeLanguage("es")}>ES</button>
            <button onClick={()=>handleChangeLanguage("en")}>EN</button>
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
}

export default HotelBar