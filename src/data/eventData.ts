export const EVENT_DATA = {
  title: 'Better Silchar Cleanliness Drive',
  targetArea: 'Premtala',
  city: 'Silchar',
  state: 'Assam',
  district: 'Cachar',
  day: 'Sunday',
  dateFormatted: '11/10/26',
  dateFull: 'Sunday, October 11, 2026',
  targetDateISO: '2026-10-11T07:00:00+05:30',
  phoneNumber: '9365675859',
  phoneDisplay: '+91 9365675859',
  phoneTel: 'tel:+919365675859',
  instagramHandle: 'silchar_youthvoice',
  instagramUrl: 'https://www.instagram.com/silchar_youthvoice?srtk=ajhicXRxbHRvM28x',
  whatsappBaseUrl: 'https://wa.me/919365675859',
  defaultWhatsAppMessage: 'Hi! I want to join the Better Silchar Cleanliness Drive at Premtala on Sunday, 11/10/26. Please confirm my spot! 🙏',
  tagline: 'Small Steps, Big Change',
  subTagline: 'Cleaner • Greener • Stronger',
  motto: 'Together we can make a cleaner, greener and better Silchar! 💚',
  unitedText: 'United For Positive Change 🤝',
  officialCallout: 'Those who are interested to join our team and wants to clean at first call in this number, confirm and join 🙏',
};

export const getWhatsAppLink = (name?: string, area?: string) => {
  let message = EVENT_DATA.defaultWhatsAppMessage;
  if (name && name.trim()) {
    const areaText = area && area.trim() ? ` from ${area.trim()}` : '';
    message = `Hello! My name is ${name.trim()}${areaText}. I am interested in joining the Better Silchar Cleanliness Drive at Premtala on Sunday, 11/10/26. Please confirm and join me in the volunteer team! 🙏`;
  }
  return `https://wa.me/919365675859?text=${encodeURIComponent(message)}`;
};
