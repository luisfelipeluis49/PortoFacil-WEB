import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Out. LED',
    desc: 'Painel de LED Outdoor 3.4G 3,5*10',
    price: 'R$9.857,00',
  },
  {
    name: 'In. LED',
    desc: 'Painel de LED Indoor 1Q 0,8*2',
    price: 'R$1.320,23',
  },
  {
    name: 'In. LED',
    desc: 'Painel de LED Outdoor 1Q 1,5*3',
    price: 'R$2050,00',
  },
  { name: 'Frete', desc: '', price: 'R$1.200,00' },
];
const addresses = ['Vila Madalena', '124', 'São Paulo', 'SP', '05210-000'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

// TowTruck Problem
export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisão
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Subtotal" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            R$14.427,23
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Instalação
          </Typography>
          <Typography gutterBottom>Esfiharia Habbibs 87</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalhes Pagamento
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Acréscimo</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>R$100,00</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>B.V.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>R$387,00</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>BV Repasse</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>R$260,00</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Desconto</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>R$1.405,00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}