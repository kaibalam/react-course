import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: ""
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, displayName, formState,
    isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log(isFormValid);

    if (!isFormValid) return;
    console.log(!!errorMessage);
    console.log(' pasando al starCreating...');
    console.log('status: '+status);
    console.log('isCheckingAunthentication: ' + isCheckingAuthentication);
    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log('status despues: '+status);
    console.log('isCheckingAunthentication despues: ' + isCheckingAuthentication);
  }
  return (
    <AuthLayout title="Register">
      <h1>FormValid {isFormValid ? 'valido' : 'incorrecto'}</h1>

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid 
            item 
            xs={12} 
            display={!!errorMessage ? '':'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} >
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant="contained"
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>

          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
