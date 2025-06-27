const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export const createWhatsAppUrl = (message: string) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const handleWhatsAppClick = (message: string) => {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank');
};
