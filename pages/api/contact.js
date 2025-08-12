import nodemailer from "nodemailer";

// Contact form email API route
// Requires SMTP configuration via env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional CONTACT_TO override (defaults to target inbox)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } =
    process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({
      error:
        "Email service not configured. Missing SMTP environment variables.",
    });
  }
  const to = CONTACT_TO || "christian.rickert.1989@gmail.com";

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const mailOptions = {
      from: `Portfolio Contact <${SMTP_USER}>`,
      replyTo: email,
      to,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p style="white-space:pre-line;">${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
