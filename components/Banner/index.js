
const Banner = ({ bannerImage, children }) => (
  <>
    <div className='image-background'>
      <div className='color-background'>
        {children}
      </div>
    </div>
    <style jsx>{`
      .image-background {
        background-image: url(${bannerImage});
        font-size: 32px;
      }
      .color-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
        background-color: rgba(51,51,51,0.8);
        min-height: 100vh;
        background-size: cover;
        background-position: center;
      }
    `}</style>
  </>
);

export default Banner;
