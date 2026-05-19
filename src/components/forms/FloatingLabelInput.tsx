type FloatingLabelInputProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  active?: boolean;
};

export default function FloatingLabelInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onFocus,
  onBlur,
  active,
}: FloatingLabelInputProps) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-3 -top-2.5 px-1 text-xs font-medium bg-white ${
          active ? 'text-brand-blue' : 'text-gray-500'
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-4 py-3.5 rounded-lg border text-gray-900 outline-none transition-colors ${
          active
            ? 'border-brand-blue ring-1 ring-brand-blue/20'
            : 'border-gray-300 focus:border-brand-blue'
        }`}
      />
    </div>
  );
}
