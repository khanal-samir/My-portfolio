import * as React from "react";

interface ContactFormEmailProps {
  subject: string;
  message: string;
  email: string;
}

export default function ContactFormEmail({
  subject,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p>
        <strong>From:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
