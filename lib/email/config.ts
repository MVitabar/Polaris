// Configuración de correo electrónico usando variables de entorno
const requiredEnvVars = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'EMAIL_TO'];

// Validar que las variables de entorno requeridas estén presentes
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0 && process.env.NODE_ENV === 'production') {
  throw new Error(
    `Faltan variables de entorno requeridas: ${missingVars.join(', ')}. ` +
    'Por favor configura estas variables en tu entorno de producción.'
  );
}

export const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  from: process.env.EMAIL_FROM || 'Polaris Studio',
  to: process.env.EMAIL_TO,
};
