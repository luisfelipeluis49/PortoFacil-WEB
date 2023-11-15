import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Select } from '@mui/material';
import { Label } from '@mui/icons-material';

//TruckConditions RoadConditions
export default function ConditionsForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalhes Painel de LED
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel>Descrição</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Descrição"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            required
            id="quantLED"
            name="quantLED"
            label="Quantidade"
            fullWidth
            variant="standard"

          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="width"
            name="width"
            label="Largura"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="height"
            name="height"
            label="Altura"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Tiipo Período</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Descrição"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="periodo"
            name="periodo"
            label="Período"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="valor-periodo"
            name="valor-periodo"
            label="Valor por Período"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Periféricos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel>Descrição</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Descrição"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            id="quantLED"
            name="quantLED"
            label="Quantidade"
            fullWidth
            variant="standard"

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="width"
            name="width"
            label="Largura"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Estruturas Especiais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel>Descrição</InputLabel>
          <Select
            required
            id="description"
            name="description"
            label="Descrição"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            id="quantLED"
            name="quantLED"
            label="Quantidade"
            fullWidth
            variant="standard"

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="width"
            name="width"
            label="Largura"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}