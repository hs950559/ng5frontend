export function jwtOptionsFactory() {
  return {
    // headerName: 'AuthorizatioKOOl',
    authScheme:  '',
    tokenGetter: () => {
      return localStorage.getItem('token');
    },
    whitelistedDomains: ['localhost:3000', 'localhost:4200', 'hkauthapi.herokuapp.com']
  };
}

