```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/');
  };

  useEffect(() => {
    // This effect will ensure the redirect occurs after the component renders
    if (router.route === '/about' && router.asPath !== '/') {
      // Only redirect if the asPath is not already /, avoiding infinite loop
      router.replace('/');
    }
  }, [router]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
```