import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
    >
      <div className="console audio text-center d-flex flex-column justify-content-center align-content-center">
        <h1>Hello {user.fbUser.displayName}! </h1>
        <p>Your Bio: {user.bio}</p>
        <p>Click the button below to logout!</p>
        <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div>
      <div className="console-border" />

    </div>
  );
}

export default Home;
