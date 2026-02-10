// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    - {{name}}
//    - {{email}}
//    - {{phone}}
//    - {{company}}
//    - {{service}}
//    - {{message}}
// 4. Get your Public Key, Service ID, and Template ID
// 5. Add them to your .env file or replace the values below

export const emailjsConfig = {
  // Your EmailJS Public Key (found in Account > API Keys)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "kX9BomM_CKgy_L7-W",
  
  // Your EmailJS Service ID (found in Email Services)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jkta87j",
  
  // Your EmailJS Template ID (found in Email Templates)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_c9y6jms",
  
  // Auto-reply Template ID (optional)
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || "template_ygp8tti",
  
  // Recipient email (will be set in EmailJS service settings)
  toEmail: "intautoservice@gmail.com",
};
