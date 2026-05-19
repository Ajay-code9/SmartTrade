import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import IndiaPhoneField from '../../components/forms/IndiaPhoneField';
import SmartTradeLogo from '../../components/auth/SmartTradeLogo';
import AuthFloatingWidgets from '../../components/auth/AuthFloatingWidgets';
import { BannerBackground } from '../../components/layout/BannerBackground';

export default function SignUpPage() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 flex h-full min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      <section className="relative flex h-full min-h-0 w-full flex-col justify-between overflow-hidden banner-surface p-8 lg:w-1/2 lg:p-12">
        <BannerBackground />
        <div className="relative z-10">
          <SmartTradeLogo variant="light" size="lg" showLink />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center py-10 lg:py-0 max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Investing Simplified
          </h1>
          <p className="text-white text-base lg:text-lg leading-relaxed">
            Open an account in minutes. Trade equities, commodities, and derivatives from one platform
            with zero brokerage on supported products and margin up to 500x on select instruments.
          </p>
        </div>

        <button
          type="button"
          className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors self-start"
          aria-label="Live chat"
        >
          <MessageCircle size={22} />
        </button>
      </section>

      <section className="flex h-full min-h-0 w-full items-center justify-center overflow-y-auto bg-white px-6 py-10 lg:w-1/2 lg:px-16 lg:py-16">
        <div className="w-full max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Create an account</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We&apos;ll send a verification code to your mobile number and email. Normally it takes
            1–2 minutes to receive the code.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <IndiaPhoneField id="phone" label="Enter Phone Number" value={phone} onChange={setPhone} />

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                Enter Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-brand-blue text-white font-semibold text-base hover:bg-brand-dark-blue transition-colors"
            >
              Get OTP
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-blue font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </section>

      <AuthFloatingWidgets />
    </div>
  );
}
