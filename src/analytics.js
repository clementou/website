const GA_MEASUREMENT_ID = 'G-E2XDJ712SJ';

export const trackPageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const trackEvent = (action, category, label, value) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
