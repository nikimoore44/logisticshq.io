import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // live sheet url
    const sheetUrl = process.env.GOOGLE_SHEET_URL || "";
    
    // Send data to Google Sheets
    const sheetResponse = await fetch(sheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const sheetResult = await sheetResponse.json();

    // Send email notification
    let emailResult: { success: boolean; error: string | null; messageId?: string } = { success: false, error: null };
    
    try {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content
      const mailOptions = {
        from: `${process.env.EMAIL_USER} <${process.env.EMAIL_FROM}>`,
        to: `${process.env.EMAIL_TO}`,
        subject: `New Contact Form Submission - ${formData.company || 'No Company'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #D8C67F; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #555; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Company:</strong> ${formData.company}</p>
              <p><strong>Timestamp:</strong> ${formData.timestamp}</p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #555; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This email was sent automatically from your website contact form.</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Timestamp: ${formData.timestamp}

Message:
${formData.message}

---
This email was sent automatically from your website contact form.
        `,
      };

      // Send email
      const emailInfo = await transporter.sendMail(mailOptions);
      emailResult = { success: true, error: null, messageId: emailInfo.messageId };
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      emailResult = { success: false, error: emailError instanceof Error ? emailError.message : String(emailError) };
    }

    // Return combined result
    return NextResponse.json({
      result: sheetResult.result === 'Success' ? 'Success' : 'Partial Success',
      sheetResult: sheetResult,
      emailResult: emailResult,
      message: emailResult.success 
        ? 'Form submitted and email sent successfully' 
        : 'Form submitted but email failed to send'
    });

  } catch (error) {
    console.error('error in contact api:', error);
    return NextResponse.json(
        { result: 'Error', error: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
  }
}