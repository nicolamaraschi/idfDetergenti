import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const schema = z.object({
    name: z.string().min(2, { message: "Name is too short" }),
    email: z.string().email({ message: "Invalid email" }),
    subject: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
    honeypot: z.string().max(0),
});

const ContactForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        // Simulate API call
        console.log("Form data:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        reset();
    };

    if (isSubmitSuccessful) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-6">Thank you for getting in touch. We will reply shortly.</p>
                <Button onClick={() => reset()} variant="outline">Send Another Message</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl w-full mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="hidden">
                <label>Keep empty:</label>
                <input {...register("honeypot")} tabIndex="-1" autoComplete="off" />
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.name')} *</label>
                <input
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="John Doe"
                />
                {errors.name && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.email')} *</label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.subject')}</label>
                <input
                    id="subject"
                    {...register("subject")}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="How can we help?"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.message')} *</label>
                <textarea
                    id="message"
                    rows="5"
                    {...register("message")}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                    placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : t('contact.send')}
            </Button>
        </form>
    );
};

export default ContactForm;
