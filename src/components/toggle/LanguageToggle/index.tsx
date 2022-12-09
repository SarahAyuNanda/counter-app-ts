import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "services/i18n/i18n";
import "./index.css";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  
  const [isChecked, setIsChecked] = useState(true);

  const onChangeLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const lang: languages = checked ? 'en' : 'id';
    i18n.changeLanguage(lang);
    setIsChecked(checked);
  }

  return (
    <div className="switch">
      <input checked={isChecked} onChange={onChangeLang} id="language-toggle" className="check-toggle check-toggle-round" type="checkbox" />
      <label htmlFor="language-toggle"></label>
      <span className="id">{t('id')}</span>
      <span className="en">{t('en')}</span>
    </div>
  );
};

export default LanguageToggle;