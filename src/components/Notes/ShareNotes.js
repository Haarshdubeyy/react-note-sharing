import React, { useState } from 'react';
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ShareNotes = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = encodeURIComponent(window.location.href);
  const noteContent = encodeURIComponent(`${note.title}\n${note.content}`);

  const handleShare = (platform) => {
    let url = `https://www.${platform}.com/`;
    url += platform === 'facebook' ? 'sharer/sharer.php?u=' : platform === 'twitter' ? 'intent/tweet?' : '';
    url += platform === 'twitter' ? `text=${noteContent}&url=${shareUrl}` : platform === 'linkedin' ? 'sharing/share-offsite/?url=' : '';
    url += platform === 'whatsapp' ? `api.whatsapp.com/send?text=${noteContent} ${shareUrl}` : shareUrl;
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="button transparent circle small"
        aria-label="Share Note"
      >
        <FaShareAlt className="icon" />
      </button>

      {isOpen && (
        <div className="card no-padding absolute left">
          <div className="row">
            <button
              onClick={() => handleShare('facebook')}
              className="button transparent circle small"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="icon blue" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="button transparent circle small"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="icon light-blue" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="button transparent circle small"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="icon indigo" />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="button transparent circle small"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp className="icon green" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareNotes;