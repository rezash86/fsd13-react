export default function Modal({ image, onClose }) {
  if (!image) return null;
  return (
    <div>
      <button onClick={onClose}>&times;</button>
      <img src={image.urls.small} alt={image.alt_description}></img>
      <p>Photgrapher : {image.user.name}</p>
      <p>Location : {image.location?.name || "Unknown"}</p>
    </div>
  );
}
