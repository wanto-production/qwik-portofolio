import { RequestHandler } from "@builder.io/qwik-city";
import nodemailer from "nodemailer"

export const onPost: RequestHandler = async (requestEvent) => {
  const data = await requestEvent.request.json()
  try {
    // Konfigurasi transporter Gmail (bisa juga pakai SMTP lain)
    const transporter = nodemailer.createTransport({
      service: "gmail", // atau "hotmail", "yahoo"
      auth: {
        user: requestEvent.env.get('PRIVATE_EMAIL_USER'), // simpan di vercel env
        pass: requestEvent.env.get('PRIVATE_EMAIL_PASS'),
      },
    });

    // Email yang dikirim
    await transporter.sendMail({
      from: `"${String(data.name)}" <${String(data.email)}>`,
      to: requestEvent.env.get('PRIVATE_EMAIL_USER'),
      subject: String(data.subject),
      text: `
Kamu menerima pesan baru dari portofolio:

Nama   : ${data.name}
Email  : ${data.email}
Subjek : ${data.subject}
Pesan  :
${data.message}

------------------------
Ini dikirim otomatis dari form kontak portofolio
`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #1a73e8;">📩 Pesan Baru dari Portofolio</h2>
      <p><strong>Nama:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subjek:</strong> ${data.subject}</p>
      <p><strong>Pesan:</strong><br/>${String(data.message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="font-size: 0.9em; color: #666;">Ini dikirim otomatis dari form kontak portofolio</p>
    </div>
  `,

    });

    requestEvent.json(200, { success: true });
  } catch (err) {
    requestEvent.json(200, { success: false, error: String(err) });
  }
}
