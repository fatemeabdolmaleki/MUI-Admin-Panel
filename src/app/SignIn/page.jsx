'use client';
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useRouter } from 'next/navigation';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function CredentialsSignInPage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'error' });

  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
  }, []);

  const handleSignIn = (provider, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    
    if (email === 'admin@example.com' && password === 'admin') {
      setNotification({
        open: true,
        message: 'Welcome, Admin!',
        severity: 'success',
      });
      router.push('/Admin'); 
    } else {
      setNotification({
        open: true,
        message: 'Invalid email or password',
        severity: 'error',
      });
    }
  };

  if (isDarkMode === null) {
    return null;
  }

  return (
    <AppProvider>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '20px'}}>
        <Alert severity="info" sx={{ marginBottom: '-100px' ,fontSize:"17px" }}>
          Use <strong className='text-green-700'> admin@example.com </strong> as email and <strong className='text-green-700'> admin </strong> as password to log in.
        </Alert>

        <SignInPage
          signIn={handleSignIn}
          slotProps={{
            emailField: { variant: 'standard', autoFocus: false },
            passwordField: { variant: 'standard' },
            submitButton: { variant: 'outlined' },
            rememberMe: {
              control: (
                <Checkbox
                  name="tandc"
                  value="true"
                  color="primary"
                  sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
                />
              ),
              color: 'textSecondary',
              label: 'Remember me',
            },
          }}
          providers={providers}
        />

        <Snackbar
          open={notification.open}
          autoHideDuration={5000}
          onClose={() => setNotification({ ...notification, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setNotification({ ...notification, open: false })}
            severity={notification.severity}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </div>
    </AppProvider>
  );
}
