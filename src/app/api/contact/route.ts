import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Define la estructura esperada del formulario de contacto.
 */
type ContactRequestBody = {
  name: string;
  email: string;
  service: string;
  message: string;
};

/**
 * Valida que el texto recibido tenga contenido real.
 */
function isValidText(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Endpoint para enviar solicitudes de contacto desde el sitio web.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    if (
      !isValidText(body.name) ||
      !isValidText(body.email) ||
      !isValidText(body.service) ||
      !isValidText(body.message)
    ) {
      return NextResponse.json(
        { message: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactToEmail) {
      return NextResponse.json(
        { message: "Configuración SMTP incompleta." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"GuaTek Web" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: body.email,
      subject: `Nueva consulta web - ${body.service}`,
      text: `
Nueva consulta desde guatekgt.com

Nombre:
${body.name}

Correo:
${body.email}

Servicio de interés:
${body.service}

Mensaje:
${body.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2>Nueva consulta desde guatekgt.com</h2>

          <p><strong>Nombre:</strong> ${body.name}</p>
          <p><strong>Correo:</strong> ${body.email}</p>
          <p><strong>Servicio de interés:</strong> ${body.service}</p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

          <p><strong>Mensaje:</strong></p>
          <p>${body.message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}