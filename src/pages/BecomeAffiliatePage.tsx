import { FormEvent, useState } from 'react';
import PageHeader from '../components/layout/PageHeader';

export default function BecomeAffiliatePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    social: '',
    comments: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your affiliate application has been submitted.');
    setForm({ name: '', email: '', contact: '', social: '', comments: '' });
  };

  return (
    <main>
      <PageHeader
        title="Become An Affiliate"
        subtitle="Passionate traders in your audience? Become a TRADEADDA Affiliate! Submit your details below and discover best-in-class benefits & commissions. Join our thriving network & start earning today!"
      />

      <section className="relative -mt-12 md:-mt-16 pb-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-xl border border-gray-100 p-8 md:p-12 space-y-6"
          >
            {(
              [
                { key: 'name', placeholder: 'Name', type: 'text' },
                { key: 'email', placeholder: 'Email', type: 'email' },
                { key: 'contact', placeholder: 'Contact number', type: 'tel' },
                { key: 'social', placeholder: 'Social Media link', type: 'url' },
              ] as const
            ).map(({ key, placeholder, type }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                required={key !== 'social'}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
              />
            ))}
            <textarea
              placeholder="Comments"
              rows={4}
              value={form.comments}
              onChange={(e) => setForm({ ...form, comments: e.target.value })}
              className="w-full border-0 border-b border-gray-300 py-3 px-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-10 py-3 bg-brand-orange text-white font-bold rounded hover:bg-opacity-90 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
