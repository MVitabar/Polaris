// Reemplaza estos valores con tus credenciales de Gmail
export const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'vitabarmartin@gmail.com', // Tu correo de Gmail
    pass: process.env.GMAIL_APP_PASSWORD || 'xntx wxuh epmj yfvb' // La contraseña de aplicación que generaste
  },
  from: process.env.EMAIL_FROM || 'Polaris Studio',
  to: process.env.EMAIL_TO || 'vitabarmartin@gmail.com' // Correo donde quieres recibir los mensajes
};
