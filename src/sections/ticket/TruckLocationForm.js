import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Select } from '@mui/material';

//Truck Location
export default function TruckLocationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Valores e Pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="periodo"
            name="periodo"
            label="Valor do contrato"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="valor-periodo"
            name="valor-periodo"
            label="Valor das parcelas"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Forma de Pagamento</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Forma de pagamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Quantidade de Parcelas</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Quantidade de Parcelas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reserva"
            name="reserva"
            label="Reserva Técnica"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      
    </React.Fragment>
  );
}