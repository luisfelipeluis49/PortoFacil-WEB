import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Divider, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ClientForm() {
  const [uf, setUF] = React.useState('');

  const handleChange = (event) => {
    setUF(event.target.value);
  };
  
  const [uf2, setUF2] = React.useState('');

  const handleChange2 = (event) => {
    setUF2(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados do Cliente
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cnpj"
            name="cnpj"
            label="CNPJ"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Razão Social"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nome Fantasia"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Representante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nome"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Telefone"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Celular"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid><Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email-nfe"
            name="email-nfe"
            label="E-mail NFE"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      <Divider ></Divider>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Endereço do Cliente
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Logradouro"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Nº"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Complemento"
            fullWidth
            autoComplete="Complemento"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="neighbourhood"
            name="neighbourhood"
            label="Bairro"
            fullWidth
            autoComplete="bairro"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="cidade"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            required
            id="uf"
            value={uf}
            onChange={handleChange}
            name="uf"
            label="UF"
            fullWidth
          >
            <MenuItem value={'SP'}>SP</MenuItem>
            <MenuItem value={'RJ'}>RJ</MenuItem>
            <MenuItem value={'PR'}>PR</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cep"
            name="cep"
            label="CEP"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="h6" gutterBottom>
        Endereço de Instalação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Logradouro"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Nº"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Complemento"
            fullWidth
            autoComplete="Complemento"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="neighbourhood"
            name="neighbourhood"
            label="Bairro"
            fullWidth
            autoComplete="bairro"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="cidade"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            required
            id="uf2"
            value={uf2}
            onChange={handleChange2}
            name="uf2"
            label="UF"
            fullWidth
          >
            <MenuItem value={'SP'}>SP</MenuItem>
            <MenuItem value={'RJ'}>RJ</MenuItem>
            <MenuItem value={'PR'}>PR</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cep"
            name="cep"
            label="CEP"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}