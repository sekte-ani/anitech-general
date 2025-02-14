import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, subject, email, message } = await req.json();

    if (!name || !subject || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
        },
      );
    }

    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Ganti dengan domain verifikasi dari Resend
      to: process.env.MY_EMAIL!,
      subject: `Pesan dari Web A.N.I: ${subject}`,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
