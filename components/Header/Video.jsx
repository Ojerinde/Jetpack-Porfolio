const Video = () => {
  return (
    <div className="background__video">
      <video className="background__video--content" loop autoPlay muted>
        <source src="./assets/header-background.mp4" type="video/mp4" />
        Your browser is not supported
      </video>
    </div>
  );
};
export default Video;
