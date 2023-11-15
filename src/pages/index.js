import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestOrders } from 'src/sections/dashboard/overview-latest-orders';
import { OverviewSales } from 'src/sections/dashboard/overview-sales';
import { OverviewTraffic } from 'src/sections/dashboard/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Porto Fácil | Board
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'Este Ano',
                  data: [90, 80, 25, 40, 15, 70, 70, 80, 85, 95, 90, 100]
                },
                {
                  name: 'Ano passado',
                  data: [60, 55, 20, 30, 10, 45, 45, 50, 55, 60, 65, 65]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[48, 33, 19]}
              labels={['VUC', 'HIC', 'HEC']}
              sx={{ height: '100%' }}
            />
          </Grid>
          
          <Grid
            xs={12}
            md={12}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'ID1049',
                  amount: 30.5,
                  customer: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1555016400000,
                  status: 'Pendente'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'ID1048',
                  amount: 25.1,
                  customer: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1555016400000,
                  status: 'Entregue'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'ID1047',
                  amount: 10.99,
                  customer: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1554930000000,
                  status: 'Cancelado'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'ID1046',
                  amount: 96.43,
                  customer: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1554757200000,
                  status: 'Pendente'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'ID1045',
                  amount: 32.54,
                  customer: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1554670800000,
                  status: 'Entregue'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'ID1044',
                  amount: 16.76,
                  customer: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1554670800000,
                  status: 'Entregue'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
