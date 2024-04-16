module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/auth/request-verification',
     handler: 'auth.initiateVerification',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/auth/send-verification',
      handler: 'auth.validateVerificationCode',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
