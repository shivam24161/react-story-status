import ReactStatus from './Stories/Stories'
import img1 from './assests/Rectangle1.png';
import img2 from './assests/Rectangle2.png';
import img3 from './assests/Rectangle3.png';
import img4 from './assests/Rectangle4.png';
import img5 from './assests/Rectangle5.png';
import './Stories/Stories.css'

const demoStories = [
  {
    imageUrl: img1,
    imageCaption: 'First Story',
  },
  {
    imageUrl: img2,
    imageCaption: 'Second Story',
  },
  {
    imageUrl: img3,
    imageCaption: 'Third Story',
  },
  {
    imageUrl: img4,
    imageCaption: 'Fourth Story',
  },
  {
    imageUrl: img5,
    imageCaption: 'Fifth Story',
  },
]

const App = () => {
  return (
    <div style={{ maxWidth: 450, margin: '40px auto' }}>
      <h2>React Stories Component Demo</h2>
      <ReactStatus items={demoStories} timeout={2500} customClass="demo-stories" />
      <h3>Usage Example</h3>
      <pre style={{ background: '#f4f4f4', padding: 16, borderRadius: 8 }}>
        {`
import { ReactStatus } from "react-status-stories";
import "react-status-stories/dist/Stories.css";
const stories = [
  { imageUrl: 'url1', 
  imageCaption: 'Caption 1' },
  { imageUrl: 'url2', 
  imageCaption: 'Caption 2' },
  // ...
];

<ReactStatus items={stories} timeout={2500} 
customClass="my-stories" />
        `}
      </pre>
    </div>
  )
}

export default App