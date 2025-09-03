import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import aislogo from "./assets/Signet_AIS_RZ.png";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="allgemeineHinweise"
      sectionTitle="Allgemeine Hinweise"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <img
            alt="aislogo"
            src={aislogo}
            style={{ width: 300, margin: 20 }}
            align="right"
          />
          <p>
            Die Starkregengefahrenkarte im "AIS Starkregenvorsorge Kreis
            Euskirchen" stellt in drei umschaltbaren Kartenansichten maximale
            Wassertiefen bzw. maximale Fließgeschwindigkeiten im gesamten
            Kreisgebiet, d. h. für alle elf Kommunen des Kreises Euskirchen,
            dar, die im Verlauf von drei simulierten Starkregenszenarien
            berechnet wurden. Bei den Ergebnissen handelt es sich um eine
            modelltechnische Untersuchung des Kreisgebiets mit dem Ziel die
            Realität möglichst gut abzubilden. Bei der Betrachtung und
            Interpretation der Ergebnisse sind die Modellgrundlagen und
            -annahmen zu berücksichtigen. Hinweise zur Aussagekraft der
            Ergebnisse werden nachfolgend beschrieben.
          </p>

          <p>
          <strong>Hinweis:</strong> Die im AIS dargestellten Simulationsergebnisse werden aktualisiert und fortgeschrieben.
          Beachten Sie daher bitte die in der Fußzeile aufgeführte Versionsnummer (derzeit Version 1.1 | 08/2025 ) und die Hinweise in der Rubrik {" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              simulierte Szenarien.
            </a>{" "}
          </p>

          <p>
            Das Ergebnis der Simulation ist von der Dauer und Intensität des
            Regens abhängig, der für die Simulation angenommen wird. Wir bieten
            Ihnen hierzu drei unterschiedliche{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              simulierte Szenarien
            </a>{" "}
            an, darunter ein außergewöhnlicher Starkregen (SRI 7) und ein
            extremer Starkregen (SRI 9 bzw. 10) als "Modellregen" sowie die
            Abbildung der Niederschlagsbelastung des Ereignisses vom 14.07 und
            15.07.2021, basierend auf Radardaten.{" "}
          </p>

          <p>
            Der Farbverlauf für die <strong>Wassertiefen</strong> nutzt die
            Eckwerte 20 cm (blau), 40 cm (gelb), 75 cm (orange) und {">"} 100 cm
            (rot). Wassertiefen unter 5 cm werden nicht mehr farbig ausgeprägt
            (transparente Darstellung). Zur Visualisierung der{" "}
            <strong>Fließgeschwindigkeiten</strong>, angegeben in Meter pro
            Sekunde (m/s), werden die Eckwerte 0,5 m/s (gelb), 1,0 m/s (orange),
            2,0 m/s (hellrot) und 4,0 m/s (dunkelrot) verwendet. Der untere
            Grenzwert für die farbige Anzeige einer Fließgeschwindigkeit liegt
            bei 0,2 m/s.
          </p>

          <p>
            Die Simulationsberechnungen wurden im Auftrag des Kreises Euskirchen
            durch das Ingenieurbüro Dr. Pecher GmbH
            durchgeführt. Weiterhin waren alle elf Kommunen, der Erftverband und
            der Wasserverband Eifel-Rur am Projekt beteiligt. Der
            Erstellungsprozess der Starkregengefahrenkarten wurde teilweise
            durch die Bezirksregierung Köln gefördert.
          </p>

          <p>
            Das Auskunfts- und Informationssystem (AIS) Starkregenvorsorge ist
            im Rahmen des DBU-Projektes KLAS in Bremen entwickelt und seitdem
            ergänzt worden.
          </p>

          <p>
            Die Bemessungsgrenze des Kanalnetzes wird bei den hier simulierten
            Ereignissen überschritten. Der größte Anteil des Niederschlagwassers
            fließt oberirdisch ab, wobei im urbanen Raum sowohl die
            Leistungsfähigkeit des Kanalnetzes als auch der Überstau des
            Kanalnetzes einen Einfluss auf die Überflutungssituation haben kann.
            Die Leistungsfähigkeit des Kanalnetzes wird hier nur geringfügig und
            pauschal berücksichtigt. Die Eigenschaften der Geländeoberfläche
            variieren je nach Flächennutzung. Die verschiedenen
            Oberflächeneigenschaften wurden im Modell über unterschiedliche
            Geländerauheiten und zeitlich variable Versickerungsansätze
            abgebildet. Relevante Retentionsräume sowie Gewässerverrohrungen und
            Durchlässe wurden aufgrund ihrer Bedeutung für die Ableitungs- und
            Speicherwirkung von Oberflächenwasser als Elemente in das Modell
            aufgenommen. Je nach Regen und Randbedingungen in der Realität
            können in Teilgebieten die Wassertiefen auf dem Gelände höher oder
            geringer ausfallen. Um diese Variationen zu verstehen und besser
            einschätzen zu können, sind die unterschiedlichen Szenarien
            dargestellt. Weitere Informationen sind in dem Reiter{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              "Aussagekraft der Simulationen"
            </a>
            &nbsp;zu finden.
          </p>
        </div>
      }
    />
  );
};
export default Component;
