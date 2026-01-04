import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, MessageCircle, Send, CheckCircle2, User, Building2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { trackEvent } from '@/components/analytics';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ongeldig email adres';
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Ongeldig telefoonnummer';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Bericht moet minimaal 10 karakters bevatten';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await base44.entities.ContactSubmission.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message,
        status: 'new'
      });

      setSubmitSuccess(true);
      trackEvent('Leads', 'submit_contact_form', formData.email);

      // Send email notification to Bas (don't block form if this fails)
      try {
        const phoneText = formData.phone ? `Telefoon: ${formData.phone}` : '';
        const companyText = formData.company ? `Bedrijf: ${formData.company}` : '';
        
        const emailBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
  <div style="background-color: #3B82F6; padding: 30px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nieuwe Contactaanvraag</h1>
  </div>
  
  <div style="padding: 30px;">
    <h2 style="color: #1f2937; font-size: 18px; margin-top: 0;">Contactgegevens</h2>
    
    <p style="margin: 10px 0; color: #374151;"><strong>Naam:</strong> ${formData.name}</p>
    <p style="margin: 10px 0; color: #374151;"><strong>Email:</strong> ${formData.email}</p>
    ${formData.phone ? `<p style="margin: 10px 0; color: #374151;"><strong>Telefoon:</strong> ${formData.phone}</p>` : ''}
    ${formData.company ? `<p style="margin: 10px 0; color: #374151;"><strong>Bedrijf:</strong> ${formData.company}</p>` : ''}
    
    <div style="margin-top: 25px; padding: 20px; background-color: #f3f4f6; border-radius: 6px;">
      <h3 style="color: #1f2937; font-size: 16px; margin-top: 0;">Bericht:</h3>
      <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
    </div>
    
    <div style="margin-top: 25px; text-align: center;">
      <a href="mailto:${formData.email}" style="display: inline-block; background-color: #3B82F6; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">Reageer op aanvraag</a>
    </div>
  </div>
  
  <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
    <p style="color: #6b7280; font-size: 12px; margin: 0;">Berk Visuals - Automatische notificatie</p>
  </div>
</div>
        `;

        await base44.integrations.Core.SendEmail({
          from_name: 'Berk Visuals Website',
          to: 'bas@berkvisuals.nl',
          subject: `Nieuwe aanvraag van ${formData.name}${formData.company ? ' (' + formData.company + ')' : ''}`,
          body: emailBody
        });
        toast.success('Email notificatie verzonden naar bas@berkvisuals.nl');
      } catch (emailError) {
        console.error('Email failed, but form was submitted:', emailError);
        toast.error(`Email notificatie kon niet worden verzonden: ${emailError.message || 'Onbekende fout'}`);
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: 'Er ging iets mis. Probeer het opnieuw of stuur een email naar bas@berkvisuals.nl' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-gradient-to-b from-white to-gray-50" aria-label="Contact en footer">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Klaar om{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              zichtbaar te worden
            </span>
            {' '}in Heusden en omstreken?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Plan een gratis en vrijblijvende intake. Vul het formulier in en 
            ik neem zo snel mogelijk contact met je op.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              >
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bedankt voor je bericht!</h3>
                <p className="text-gray-600">
                  Ik heb je aanvraag ontvangen en neem binnen 24 uur contact met je op.
                </p>
                <Button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                >
                  Nog een bericht versturen
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 text-left shadow-xl">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      Naam *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jouw naam"
                      className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jouw@email.nl"
                      className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      Telefoonnummer
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+31 6 12345678"
                      className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-900 mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Bedrijfsnaam
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Jouw bedrijf"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <Label htmlFor="message" className="text-gray-900 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    Bericht *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Vertel ons over je bedrijf en wat je wilt bereiken met video content..."
                    rows={4}
                    className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 resize-none text-sm sm:text-base ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-red-600 text-xs sm:text-sm">{errors.submit}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Verstuur aanvraag
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Verplichte velden. We respecteren je privacy en delen je gegevens nooit met derden.
                </p>
              </form>
            )}
          </motion.div>

          <div className="mt-6 sm:mt-8 text-gray-600">
            <p className="text-xs sm:text-sm">
              Of stuur direct een email naar{' '}
              <a href="mailto:bas@berkvisuals.nl" className="text-blue-600 hover:text-blue-700 underline break-all">
                bas@berkvisuals.nl
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-lg"
        >
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">E-mail</h4>
            <a href="mailto:bas@berkvisuals.nl" className="text-gray-600 hover:text-blue-600 transition-colors">
              bas@berkvisuals.nl
            </a>
          </div>
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-cyan-600" />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">Locatie</h4>
            <p className="text-gray-600">Haarsteeg, Gemeente Heusden</p>
          </div>
          <div className="text-center sm:text-left">
            <div className="w-12 h-12 mx-auto sm:mx-0 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Instagram className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">Socials</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/basvdberk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => trackEvent('Social', 'click_social_link', 'Instagram')}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bas-van-den-berk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => trackEvent('Social', 'click_social_link', 'LinkedIn')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">Berk Visuals</span>
                <p className="text-xs text-gray-500">by Bas van den Berk</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Berk Visuals. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}