const TerminalHeader = () => {
  return (
    <div className="absolute top-24 right-8 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl font-mono text-sm">
      <div className="text-gray-400 text-xs mb-1">Last login: Tue Mar 3 14:22:09 on ttys000</div>
      <div className="text-gray-400 text-xs mb-2">zsh 5.9 · Darwin arm64</div>
      <div className="flex items-center gap-2">
        <span className="text-green-400">alen@MacBook-Pro ~ %</span>
        <span className="text-white">whoami --experience</span>
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};

export default TerminalHeader;
