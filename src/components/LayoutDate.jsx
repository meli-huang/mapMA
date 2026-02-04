import { LayoutGroup } from "framer-motion";
import { RowCarousel } from './RowCarousel';
import FormFields from "./FormFields";

export default function LayoutDate({ setLayoutMode, setSelectedArt }) {
  return (
    <LayoutGroup>

      {/* Form Fields */}
      <FormFields 
        onClickHome={() => setLayoutMode("home")}
        onClickDate={() => setLayoutMode("date")}
        onClickTitle={() => setLayoutMode("title")}
        onClickArtist={() => setLayoutMode("artist")}
        layout={"date"}
      />


      <div className="layout-page">
        <RowCarousel 
          startCategory={"datecat1"}
          imageIds={[0, 1, 2, 3, 4, 5, 6]} 
          setSelectedArt={setSelectedArt} />
        <RowCarousel 
          startCategory={"datecat2"}
          imageIds={[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]} 
          setSelectedArt={setSelectedArt} />
        <RowCarousel 
          startCategory={"datecat3"}
          imageIds={[18, 19, 20, 21, 22, 23, 24, 25, 26]} 
          setSelectedArt={setSelectedArt} />
      </div>
    </LayoutGroup>
  );
}
