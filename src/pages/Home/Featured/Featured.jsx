const Featured = () => {
  return (
    <section className="toy-container">
      <h1 className="text-center font-extrabold  text-white text-4xl bg-[#7743DB] p-5 rounded-lg mb-8">
        Featured Videos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ryx5t2nCquI?si=cujqS1KNryrO7eC7"
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TJgTHOXnr-I?si=Cq_1pYLaAWpUC3pB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Kj-VY6EHpo4?si=JOIBW2O9OqkkGsOY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xQDuSF8zzFw?si=X7qM5ba0WXL3dukk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Featured;
