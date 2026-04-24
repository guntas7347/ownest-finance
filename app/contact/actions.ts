"use server";

import { sendEmail } from "@/lib/nodemailer";

export async function submitContactForm(data: {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}) {
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa; border-radius: 12px;">
      <h2 style="color: #c8732a; margin-bottom: 8px;">New Inquiry from Ownest Finance</h2>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin-bottom: 24px;" />
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #6b7280; width: 140px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</td><td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.fullName}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td><td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.email}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td><td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.phone || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Interest</td><td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.interest}</td></tr>
      </table>
      <div style="margin-top: 20px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <p style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Message</p>
        <p style="color: #1f2937; margin: 0; line-height: 1.7;">${data.message}</p>
      </div>
    </div>
  `;

  return sendEmail({
    subject: `New Inquiry: ${data.interest} — ${data.fullName}`,
    html,
  });
}
