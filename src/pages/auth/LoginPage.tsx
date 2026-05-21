import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Facebook,
  Instagram,
  Smartphone,
  Twitter,
  Youtube,
  Send,
} from 'lucide-react';
import TradeAddaLogo from '../../components/auth/TradeAddaLogo';
import AuthFloatingWidgets from '../../components/auth/AuthFloatingWidgets';
import FloatingLabelInput from '../../components/forms/FloatingLabelInput';
import IndiaPhoneField from '../../components/forms/IndiaPhoneField';

type LoginMode = 'email' | 'phone';

export default function LoginPage() {
  const [mode, setMode] = useState<LoginMode>('email');
  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-gray-50 to-slate-200 flex flex-col items-center justify-center px-4 py-12 relative">
      <header className="text-center mb-8">
        <div className="flex justify-center mb-3">
          <TradeAddaLogo variant="dark" size="lg" showLink />
        </div>
        <a
          href="https://www.tradeadda.live"
          className="text-brand-orange font-medium text-sm hover:underline"
        >
          www.tradeadda.live
        </a>
      </header>

      <main className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign In</h1>
        <p className="text-gray-500 text-sm mb-6">Sign in to continue to your account</p>

        <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
          <button
            type="button"
            onClick={() => setMode('email')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
              mode === 'email'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Client ID / Email
          </button>
          <button
            type="button"
            onClick={() => setMode('phone')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
              mode === 'phone'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Phone Number
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'email' ? (
            <>
              <FloatingLabelInput
                id="clientId"
                label="Client ID or Email *"
                value={clientId}
                onChange={setClientId}
                onFocus={() => setFocusedField('clientId')}
                onBlur={() => setFocusedField(null)}
                active={focusedField === 'clientId' || clientId.length > 0}
              />
              <div className="relative">
                <label
                  htmlFor="password"
                  className={`absolute left-3 -top-2.5 px-1 text-xs font-medium bg-white ${
                    focusedField === 'password' || password.length > 0
                      ? 'text-gray-600'
                      : 'text-gray-500'
                  }`}
                >
                  Password *
                </label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 pr-12 rounded-lg border border-gray-300 text-gray-900 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </>
          ) : (
            <IndiaPhoneField id="loginPhone" label="Enter Phone Number" value={phone} onChange={setPhone} />
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-brand-blue text-white font-semibold hover:bg-brand-dark-blue transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-5">
          By signing in, you accept our{' '}
          <Link to="/terms-and-conditions" className="text-brand-blue hover:underline">
            Terms and Conditions
          </Link>
        </p>

        <div className="flex items-center justify-between mt-4 text-sm">
          <button type="button" className="text-brand-blue hover:underline font-medium">
            Forgot password?
          </button>
          <Link to="/signup" className="text-brand-blue hover:underline font-medium">
            Sign Up
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
            Trade on the go
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-footer text-white font-semibold text-sm hover:bg-brand-dark-blue transition-colors"
          >
            <Smartphone size={20} />
            Download Mobile App
          </button>
        </div>
      </main>

      <footer className="mt-10 text-center">
        <p className="text-sm text-gray-500 mb-4">Follow us for updates</p>
        <div className="flex items-center justify-center gap-3 mb-6">
          {[
            { Icon: Instagram, bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' },
            { Icon: Send, bg: 'bg-sky-400' },
            { Icon: Facebook, bg: 'bg-blue-600' },
            { Icon: Twitter, bg: 'bg-gray-900' },
            { Icon: Youtube, bg: 'bg-red-600' },
          ].map(({ Icon, bg }, idx) => (
            <a
              key={idx}
              href="https://www.tradeadda.live"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full ${bg} text-white flex items-center justify-center hover:opacity-90 transition-opacity`}
              aria-label="Social link"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400">Powered by TRADEADDA</p>
      </footer>

      <AuthFloatingWidgets />
    </div>
  );
}
