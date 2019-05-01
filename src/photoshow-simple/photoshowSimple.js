import craddel from '../craddel';
import crel from '../crel';
import { cleanDocument } from '../cleaner';

export default (urls, clean = true) => {
  if (clean) cleanDocument();

  craddel(
    { tag: 'style', parent: document.head },
    {
      innerHTML: /* css */ `
        body {
          background-color: #0E0E0E;
          text-align: center;
        }
        #iyMediaContainer {
          text-align: center;
        }
        .iyMedia {
          box-shadow:
            0px 0px 8px 2px rgba(0,0,0,.2),
            0px 4px 4px 2px rgba(0,0,0,.2);

          filter: brightness(1);
          cursor: pointer;
          height: 250px;
          margin: 8px;
          transition: filter 100ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        .iyMedia:hover {
          filter: brightness(1.1);
        }
      `
    }
  );

  const container = craddel(undefined, { id: 'iyMediaContainer' });

  urls.forEach(url => {
    craddel(
      {
        tag: 'a',
        parent: container,
        child: crel('img', { src: url, className: 'iyMedia' })
      },
      { href: url, target: '_blank', rel: 'noopener noreferrer' }
    );
  });
};
