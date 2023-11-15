import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customers/customers-table';
import { CustomersSearch } from 'src/sections/customers/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'carson.darrin@gmail.com',
    name: 'Carson Darrin',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '1865  Pleasant Hill Road'
    },
    avatar: '/assets/avatars/avatar-fran-perez.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'fran.perez@gmail.com',
    name: 'Fran Perez',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'Barueri',
      country: 'Brasil',
      state: 'SP',
      street: '4894  Lakeland Park Drive'
    },
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'jie.yan.song@gmail.com',
    name: 'Jie Yan Song',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'Curitiba',
      country: 'Brasil',
      state: 'PR',
      name: 'Anika Visser',
      street: '4158  Hedge Street'
    },
    avatar: '/assets/avatars/avatar-anika-visser.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'anika.visser@gmail.com',
    name: 'Anika Visser',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '75247'
    },
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: 'miron.vitold@gmail.com',
    name: 'Miron Vitold',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    address: {
      city: 'Rio de Janeiro',
      country: 'Brasil',
      state: 'RJ',
      street: '317 Angus Road'
    },
    avatar: '/assets/avatars/avatar-penjani-inyene.png',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: 'penjani.inyene@gmail.com',
    name: 'Penjani Inyene',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    address: {
      city: 'Rio de Janeiro',
      country: 'Brasil',
      state: 'RJ',
      street: '2188  Armbrester Drive'
    },
    avatar: '/assets/avatars/avatar-omar-darboe.png',
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: 'omar.darobe@gmail.com',
    name: 'Omar Darobe',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '1798  Hickory Ridge Drive'
    },
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
    createdAt: subDays(subHours(now, 2), 5).getTime(),
    email: 'siegbert.gottfried@gmail.com',
    name: 'Siegbert Gottfried',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e8877da9a65442b11551975',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '3934  Wildrose Lane'
    },
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    createdAt: subDays(subHours(now, 8), 6).getTime(),
    email: 'iulia.albu@gmail.com',
    name: 'Iulia Albu',
    phone: '(xx) xxxxx-xxxx'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    address: {
      city: 'São Paulo',
      country: 'Brasil',
      state: 'SP',
      street: '368 Lamberts Branch Road'
    },
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    createdAt: subDays(subHours(now, 1), 9).getTime(),
    email: 'nasimiyu.danai@gmail.com',
    name: 'Nasimiyu Danai',
    phone: '(xx) xxxxx-xxxx'
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

async function addClient() {
  
}

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Clientes | DShow
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
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Clientes
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Exportar
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={alert('Add')}
                >
                  Adicionar
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
