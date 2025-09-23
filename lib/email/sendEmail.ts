import nodemailer from 'nodemailer';
import { emailConfig } from './config';

export async function sendEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  marketingConsent: boolean;
}) {
  // Configuración mejorada del transporte de correo
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Usar SSL
    auth: emailConfig.auth,
    tls: {
      // No fallar en certificados inválidos (útil para desarrollo)
      rejectUnauthorized: false
    }
  });

  // Configurar el correo electrónico
  const mailOptions = {
    from: emailConfig.from,
    to: emailConfig.to,
    subject: `Nuevo mensaje de contacto de ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
        
        <div style="margin: 15px 0; padding: 15px; background-color: #f8fafc; border-radius: 6px;">
          <p style="margin: 5px 0;"><strong>Nombre:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${data.phone || '<span style="color: #888; font-style: italic;">No proporcionado</span>'}</p>
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8fafc; border-radius: 6px;">
          <p style="margin-top: 0;"><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line; margin: 10px 0 0 0; line-height: 1.5;">${data.message}</p>
        </div>
        
        <div style="margin: 15px 0; padding: 10px; background-color: ${data.marketingConsent ? '#dcfce7' : '#fee2e2'}; border-radius: 6px; text-align: center;">
          <p style="margin: 0; font-weight: 500; color: ${data.marketingConsent ? '#166534' : '#991b1b'};">
            ${data.marketingConsent 
              ? '✅ Acepta recibir actualizaciones y ofertas' 
              : '❌ No acepta recibir actualizaciones ni ofertas'
            }
          </p>
        </div>
        
        <p style="margin: 20px 0 0 0; font-size: 12px; color: #6b7280; text-align: center;">
          Este mensaje fue enviado desde el formulario de contacto de Polaris Studio
        </p>
      </div>
    `,
  };

  // Enviar el correo
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
}
