import { Container, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', padding: '20px 0', marginTop: '40px' }}>
            <Container>
                <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '10px' }}>
                    Síguenos en nuestras redes sociales
                </Typography>

                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="https://www.facebook.com/cmblondres/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            style={{ color: '#fff' }}
                        >
                            <Facebook />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/pastor_wilsoncubides/?igshid=NzZlODBkYWE4Ng%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            style={{ color: '#fff' }}
                        >
                            <Instagram />
                        </IconButton>
                    </Grid>

                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
