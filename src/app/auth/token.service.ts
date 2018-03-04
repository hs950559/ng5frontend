export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('token');
    },
    whitelistedDomains: ['localhost:3000', 'localhost:4200', 'hkauthapi.herokuapp.com']
  };
}

