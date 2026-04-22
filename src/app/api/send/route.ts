import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.MY_EMAIL;

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY is not set' }),
        { status: 500 },
      );
    }

    if (!toEmail) {
      return new Response(
        JSON.stringify({ error: 'MY_EMAIL is not set' }),
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
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
      to: toEmail,
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
