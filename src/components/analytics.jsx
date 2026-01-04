import ReactGA from 'react-ga4';

let isInitialized = false;

export const initGA = () => {
  if (!isInitialized) {
    ReactGA.initialize('G-XXXXXXXXXX');
    isInitialized = true;
  }
};

export const trackEvent = (category, action, label) => {
  const consent = localStorage.getItem('ga_cookie_consent');
  if (consent === 'accepted' && isInitialized) {
    ReactGA.event({
      category,
      action,
      label
    });
  }
};