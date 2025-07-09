# React Stories Component

A lightweight and customizable React component to display WhatsApp-style status stories with circular previews. Perfect for building Instagram, WhatsApp, or Snapchat-like story UIs in your React apps.

👉 **[Live Demo](https://react-status.netlify.app/)**

## Installation

```
npm install react-status-stories
```

## Usage

```tsx
import { ReactStatus } from "react-status-stories";
import "react-status-stories/dist/Stories.css";

const stories = [
  { imageUrl: 'url1', imageCaption: 'Caption 1' },
  { imageUrl: 'url2', imageCaption: 'Caption 2' },
  // ...
];

<ReactStatus items={stories} timeout={2500} customClass="my-stories" />
```

## Need Help?

If you face any issues or have questions, you're welcome to [raise an issue](https://github.com/shivam24161/react-story-status/issues) on GitHub.


## License

MIT 