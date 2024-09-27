import React, { useState } from 'react';
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ShareNotes = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use const for shareUrl and noteContent since they don't change
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