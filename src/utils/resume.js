// Shared resume helpers - same behaviour as the Header's Resume menu.
const RESUME_URL = `${import.meta.env.BASE_URL}Resume.pdf`;

export const downloadResumePdf = () => {
  const link = document.createElement('a');
  link.href = RESUME_URL;
  link.download = 'Daniel_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const viewResumePdf = () => {
  window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
};
