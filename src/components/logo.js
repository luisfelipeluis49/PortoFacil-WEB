import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img src="https://www.dshow.com.br/imgs/geral/logo-header-light.png" alt="Logo" />
  );
};
