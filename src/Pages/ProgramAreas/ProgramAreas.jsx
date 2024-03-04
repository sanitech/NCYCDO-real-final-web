import React, { useEffect, useState } from "react";
import ProgramsAreasCom from "../../Components/ProgramCom/ProgramsAreasCom";
import Partner from "../../Components/Partner/Partener";
import Cat from "../../Components/CAT/Cat";
import { useParams } from "react-router-dom";
import { programArea } from "../../Data/Data";

function ProgramAreas() {
  const [selectedProgramArea, setSelectedProgramArea] = useState([]);
  const { id } = useParams();
  const [selectArea, setSelectedArea] = useState([]);

  function filterProgramAreaByTitle(titleToFilter) {
    return programArea.filter((area) => area.title === titleToFilter);
  }

  useEffect(() => {
    setSelectedProgramArea(filterProgramAreaByTitle(id));
    setSelectedArea(filterProgramAreaByTitle(id).catAction)
  }, [id]);

  return (
    <div key={id}>
      <ProgramsAreasCom selectedProgramArea={selectedProgramArea} />
      {
        selectArea && (
          selectArea.map((item) => {
            return <Cat about={item} />
          })
        )
      }
      <Partner />
    </div>
  );
}

export default ProgramAreas;
