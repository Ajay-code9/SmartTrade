import type { ReactNode } from 'react';

type PhoneFrameProps = {
  title: string;
  children: ReactNode;
};

export default function PhoneFrame({ title, children }: PhoneFrameProps) {
  return (
    <div className="relative z-10 w-[200px] md:w-[220px] shrink-0">
      <div className="rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="h-6 bg-gray-800 flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-600" />
        </div>
        <div className="px-3 py-2 bg-gray-900 border-b border-gray-700">
          <p className="text-white text-sm font-semibold text-center">{title}</p>
        </div>
        <div className="px-2 py-2">{children}</div>
        <div className="h-10 bg-gray-800 flex items-center justify-around px-2 border-t border-gray-700">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-5 h-5 rounded bg-gray-600" />
          ))}
        </div>
      </div>
    </div>
  );
}
