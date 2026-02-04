"use client";

import emailjs from "@emailjs/browser";

export const sendEmail = async ({ fullName, email, phone, company, subject, message }) => {
    try {
        const result = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                from_name: fullName,
                from_email: email,
                phone: phone,
                company: company,
                subject: subject,
                message: message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        return result;
    } catch (error) {
        throw error;
    }
};
