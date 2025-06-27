import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUrl } from '../utils/urlStorage';

function RedirectPage() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urlData = getUrl(shortcode);
    if (urlData) {
      const now = Date.now();
      const expiry = urlData.createdAt + urlData.validity * 60000;
      if (now < expiry) {
        window.location.href = urlData.originalUrl;
      } else {
        alert("Link expired!");
        navigate("/");
      }
    } else {
      alert("Invalid shortcode!");
      navigate("/");
    }
  }, [shortcode, navigate]);

  return null;
}

export default RedirectPage;