import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Image src="https://logodownload.org/wp-content/uploads/2022/08/porto-logo.png" alt="Logo" />
  );
};
