import React from 'react';

const MedicalDisclaimer: React.FC = () => {
  return (
    <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">
          info
        </span>
        Legal Disclaimer
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        This website provides general information and does not constitute legal advice. Viewing this site, sending an
        email, or submitting a form does not create an attorney–client relationship. Do not send confidential
        information until a formal engagement is confirmed in writing.
      </p>
    </div>
  );
};

export default MedicalDisclaimer;

