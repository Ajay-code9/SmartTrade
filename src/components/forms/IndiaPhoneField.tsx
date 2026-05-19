import { ChevronDown } from 'lucide-react';

type IndiaPhoneFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function IndiaPhoneField({ id, label, value, onChange }: IndiaPhoneFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <div className="flex rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-brand-blue/30 focus-within:border-brand-blue">
        <div className="flex items-center gap-1 px-3 py-3 bg-gray-50 border-r border-gray-300 text-sm font-medium text-gray-700 shrink-0">
          <span>IN +91</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          placeholder="Mobile Number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none min-w-0"
        />
      </div>
    </div>
  );
}
