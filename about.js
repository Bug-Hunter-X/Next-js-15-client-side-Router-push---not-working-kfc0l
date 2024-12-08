```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/'); //Attempt to redirect to home
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
```