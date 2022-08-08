import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

function Item({ name, type, price, stock, img }) {
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography variant="body2" color="text.secondary">$ {price}</Typography>
      </CardContent>
      <CardActions>
        <ItemCount initial={1} stock={stock} />
      </CardActions>
    </Card>
  );
}

export default Item