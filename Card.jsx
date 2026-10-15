import './Card.css';

function Card({ user, plat, img, link }) { // Using destructuring for cleaner code
  return (
    <div className="profile-card">
      <img
        src={img}
        alt={user}
        className="card-avatar"
      />
      <p className="card-platform">
        {plat}
      </p>
      <p className="card-username">
        {user}
      </p>
      <a
        href={link}
        className="card-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  );
}

export default Card; 