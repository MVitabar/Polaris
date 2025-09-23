import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/sendEmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar los datos recibidos
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar el correo
    try {
      console.log('Datos recibidos en el servidor:', body); // Para depuración
      
      const result = await sendEmail({
        name: body.name,
        email: body.email,
        phone: body.phone || '', // Asegurarse de que siempre sea un string
        message: body.message,
        marketingConsent: Boolean(body.marketingConsent)
      });

      return NextResponse.json({
        success: true,
        message: 'Correo enviado correctamente',
        data: result
      });
    } catch (emailError) {
      console.error('Error al enviar el correo:', emailError);
      
      // Mensajes de error más descriptivos
      let errorMessage = 'Error al enviar el correo';
      let statusCode = 500;
      
      if (emailError instanceof Error) {
        if (emailError.message.includes('Invalid login') || 
            emailError.message.includes('authentication failed')) {
          errorMessage = 'Error de autenticación con el servidor de correo';
          statusCode = 401;
        } else if (emailError.message.includes('certificate')) {
          errorMessage = 'Error de certificado SSL. Por favor, inténtalo de nuevo más tarde.';
        }
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: errorMessage,
          details: emailError instanceof Error ? emailError.message : 'Error desconocido al enviar el correo'
        },
        { status: statusCode }
      );
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
