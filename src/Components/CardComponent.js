import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '../App';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';

let starFillFlag;
const linkStyle = {
    textDecoration: "none",
    color: '#111517'
};
export default function CountryCardComponent(props) {
    starFillFlag = props.name === "Germany";
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt={props.name}
                height="140"
                image={props.flag}
            />
            <CardContent>
                <ThemeProvider theme={THEME}>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link to="/details" style={linkStyle}>{props.name}</Link>
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        Population:
                        <Typography gutterBottom variant="h3" component="span">{props.population}</Typography>
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        Region:
                        <Typography gutterBottom variant="h3" component="span">{props.region}</Typography>
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        Capital:
                        <Typography gutterBottom variant="h3" component="span">{props.capital}</Typography>
                    </Typography>
                </ThemeProvider>
            </CardContent>
            <CardActions>
                {favourateIcon()}
            </CardActions>
        </Card>
    );
}

function favourateIcon() {
    if (starFillFlag) {
        return (
            <IconButton aria-label="favourate" sx={{ display: { xs: 'block', md: 'none' }, color: '#ffc400' }}>
                <StarRoundedIcon />
            </IconButton>
        );
    }
    return (
        <IconButton aria-label="favourate" sx={{ display: { xs: 'block', md: 'none' }, color: '#ffc400' }}>
            <StarOutlineRoundedIcon />
        </IconButton>
    );
}