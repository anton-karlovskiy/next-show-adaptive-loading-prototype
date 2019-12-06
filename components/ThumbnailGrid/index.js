
import ThumbnailGridItem from './ThumbnailGridItem';

const ThumbnailGrid = ({ thumbnailGridItems }) => (
  <>
    <div>
      { thumbnailGridItems.map(thumbnailGridItem => (
        <ThumbnailGridItem key={thumbnailGridItem._id} thumbnailGridItem={thumbnailGridItem} />
      )) }
    </div>
    <style jsx>{`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 8px;
    `}</style>
  </>
);

export default ThumbnailGrid;
