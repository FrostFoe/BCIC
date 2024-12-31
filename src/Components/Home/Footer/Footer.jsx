import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img className="w-auto h-7" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Seal_of_BCIC_College.svg/1200px-Seal_of_BCIC_College.svg.png" alt="BCIC College Logo" />
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2025-2026 BCIC College. All Rights Reserved.
          Made with ❤️ by <a href="https://frostfoe.netlify.app/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">@FrostFoe</a>
        </p>

        <div className="flex -mx-2">
          <a href="mailto:frostfoe@gmail.com" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1.743 12.003h2.65V3.088l-.812-.52C2.406 1.816.86 2.658.86 4.05v7.074c0 .486.396.88.884.88Z" />
                <path d="M.86 4.05v1.176l3.533 2.263l2.65 1.698l2.65-1.698l3.534-2.263V4.049c0-1.392-1.547-2.234-2.723-1.48l-.81.52l-2.651 1.697l-2.65-1.698l-.812-.52C2.406 1.816.86 2.658.86 4.05" />
                <path d="M9.693 12.003h2.65a.882.882 0 0 0 .883-.88V4.049c0-1.392-1.546-2.234-2.722-1.48l-.811.52z" />
              </g>
            </svg>

          </a>


          <a href="https://github.com/FrostFoe" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.843 16.379C14.2072 16.7343 14.4313 17.2077 14.477 17.713C14.975 17.99 15.559 18.0583 16.101 17.9026C16.6455 17.747 17.1053 17.3803 17.378 16.884C17.7006 16.3235 18.2644 15.9438 18.905 15.856C18.905 15.856 19.874 15.842 18.973 16.461C18.441 16.7993 18.048 17.317 17.865 17.92C17.865 17.92 17.279 19.858 14.504 19.258C14.501 20.093 14.493 20.721 14.493 20.958C14.493 21.222 14.672 21.529 15.172 21.439C19.8154 19.893 22.651 15.2079 21.8676 10.3779C21.0842 5.54799 16.913 1.99937 12.026 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
