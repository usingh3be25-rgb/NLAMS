// NLAMS Universal Action Modal Component
import { Icon } from "./Icons.js";

export function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-2xl", footer }) {
  if (!isOpen) return null;

  const boxClass = "bg-white rounded-2xl shadow-2xl border border-slate-200 w-full overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 " + maxWidth;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className={boxClass}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Icon name="X" className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-xs text-slate-700">
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
