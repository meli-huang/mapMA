import { LayoutGroup } from "framer-motion";
import { RowCarousel } from './RowCarousel';
import FormFields from "./FormFields";

export default function LayoutArtist({ setLayoutMode, setSelectedArt }) {
  return (
    <LayoutGroup>

      {/* Form Fields */}
      <FormFields 
        onClickHome={() => setLayoutMode("home")}
        onClickDate={() => setLayoutMode("date")}
        onClickTitle={() => setLayoutMode("title")}
        onClickArtist={() => setLayoutMode("artist")}
        layout={"artist"}
      />

      <div className="layout-page">
        <RowCarousel 
          startCategory={"artistcat1"}
          imageIds={[26, 15, 0, 7, 24, 21, 10, 8, 16]} 
          setSelectedArt={setSelectedArt}  />
        <RowCarousel 
          startCategory={"artistcat2"}
          imageIds={[9, 2, 6, 22, 19, 18, 4, 17, 1]} 
          setSelectedArt={setSelectedArt}  />
        <RowCarousel 
          startCategory={"artistcat3"}
          imageIds={[13, 14, 12, 11, 3, 23, 5, 20, 25]} 
          setSelectedArt={setSelectedArt}  />
      </div>
    </LayoutGroup>


  );
}
