```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { useEffect, useState } from 'react';

export default async function About({ initialSession }) {
  const [session, setSession] = useState(initialSession);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await unstable_getServerSession(authOptions);
      setSession(session);
    };

    fetchSession();
  }, []);

  if (!session) {
    return (
      <div>
        <h1>Please sign in to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>You are logged in as {session.user.email}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      initialSession: session
    }
  }
}
```