import { LayoutGroup } from "framer-motion";
import { RowCarousel } from './RowCarousel';
import FormFields from "./FormFields";

export default function LayoutTitle({ setLayoutMode, setSelectedArt }) {
  return (
    <LayoutGroup>

      {/* Form Fields */}
      <FormFields 
        onClickHome={() => setLayoutMode("home")}
        onClickDate={() => setLayoutMode("date")}
        onClickTitle={() => setLayoutMode("title")}
        onClickArtist={() => setLayoutMode("artist")}
        layout={"title"}
      />

      <div className="layout-page">
        <RowCarousel 
          startCategory={"titlecat1"}
          imageIds={[12, 16, 5, 4, 8, 19, 10, 14]} 
          setSelectedArt={setSelectedArt} />
        <RowCarousel 
          startCategory={"titlecat2"}
          imageIds={[21, 6, 13, 23, 17, 2, 26, 18, 25]}
          setSelectedArt={setSelectedArt} />
        <RowCarousel 
          startCategory={"titlecat3"}
          imageIds={[11, 24, 22, 3, 15, 0, 20, 9, 7, 1]} 
          setSelectedArt={setSelectedArt} />
      </div>
    </LayoutGroup>
  );
}
