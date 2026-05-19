type MenuButtonProps = {
  open: boolean;
  onClick: () => void;
};

export default function MenuButton({ open, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 active:scale-95"
    >
      <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      <span className="flex w-5 flex-col items-end justify-center gap-[5px]">
        <span
          className={`block h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
            open ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
          }`}
        />
        <span
          className={`block h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
            open ? 'w-0 opacity-0' : 'w-3.5'
          }`}
        />
        <span
          className={`block h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
            open ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-4'
          }`}
        />
      </span>
    </button>
  );
}
