import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { StepsLocacao } from 'src/sections/painel-locacao/Steps.js';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => (
  <>
    <Head>
      <title>
        Abrir OS | Porto Fácil
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <StepsLocacao />
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
