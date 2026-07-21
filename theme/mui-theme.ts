import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
    dark: true;
    gradient: true;
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'var(--color-white)',
          fontSize: '16px',
          lineHeight: '24px',
          textTransform: 'none',
          borderRadius: '32px',
          '&:hover': {
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
          },
          variants: [
            {
              props: { variant: 'light' },
              style: {
                color: 'var(--color-purple-01)',
                backgroundColor: 'var(--color-purple-05)',
                '&:hover': {
                  boxShadow:
                    'rgba(50, 50, 93, 0.12) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.15) 0px 18px 36px -18px inset;',
                },
              },
            },
            {
              props: { variant: 'dark' },
              style: {
                backgroundColor: 'var(--color-purple-01)',
              },
            },
            {
              props: { variant: 'gradient' },
              style: {
                backgroundImage: 'linear-gradient(45deg, var(--color-purple-01), var(--color-brink-pink))',
              },
            },
          ],
        },
      },
    },
  },
});