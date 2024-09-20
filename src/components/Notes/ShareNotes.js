import React, { useState } from 'react';
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ShareNotes = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = encodeURIComponent(window.location.href);
  const noteContent = encodeURIComponent(`${note.title}\n${note.content}`); 

  const handleShare = (platform) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${noteContent}&url=${shareUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${noteContent} ${shareUrl}`;
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-blue-500"
        aria-label="Share Note"
      >
        <FaShareAlt size={20} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 flex space-x-2 z-10">
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center text-blue-600"
            aria-label="Share on Facebook"
          >
            <FaFacebook size={20} />
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center text-blue-400"
            aria-label="Share on Twitter"
          >
            <FaTwitter size={20} />
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="flex items-center text-blue-700"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin size={20} />
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className="flex items-center text-green-500"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareNotes;
