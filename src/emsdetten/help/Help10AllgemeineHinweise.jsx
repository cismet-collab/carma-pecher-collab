import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
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
            Die Starkregengefahrenkarte im "AIS Starkregenvorsorge Emsdetten" stellt in zwei
            umschaltbaren Kartenansichten maximale Wassertiefen bzw. maximale
            Fließgeschwindigkeiten im kanalisierten Einzugsgebiet der Stadt dar. Grundlage bilden
            zwei{" "}
            <a
            className="renderAsLink"
            onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
            simulierte Szenarien
            </a>{" "}
            , ein Starkregen (SRI 7) als "Modellregen" sowie ein
            extremer Starkregen (SRI 8) aus lokal gemessenen Regenhöhen der Station St. Arnold (LANUV),
            die auf ganz Emsdetten angewendet wurden.
          </p>

          <p>
            Die Simulationsberechnungen wurden im Auftrag der Stadt Emsdetten im Rahmen der generellen Entwässerungsplanung durch das Ingenieurbüro
            Dr. Pecher AG (Erkrath) durchgeführt. <strong>Grundlagen der Simulationsberechnungen:</strong>
          </p>

          <ul>
            <li>Digitales Geländemodell (DGM2) für das kanalisierte Einzugsgebiet der Stadt Emsdetten
            (flächenhafte Höhenmessungen durch das Land NRW im Jahr 2014)</li>
            <li>Gebäude aus dem Liegenschaftskataster der Stadt Emsdetten (Stand: 02/2016)</li>
            <li>Gekoppeltes Kanalnetz- und Oberflächenabflussmodell (bidirektionale Kopplung)
            <br/>Schnittstellen zwischen Oberfläche und Kanalnetz definieren die Schächte des
            Kanalnetzes (Simulationssoftware DYNA/GeoCPM ®)</li>
            <li>Gewässerverrohrungen und Durchlässe (nur in Kombination mit dem Kanalnetz)</li>
            <li>Unterschiedliche Geländerauheiten und Versickerungsansätze für Geländeoberflächen</li>
          </ul>

          <p>
            Zur Betrachtung der Ergebnisse stellen wir Ihnen drei verschiedene Hintergrundkarten bereit, die
            auf den folgenden Geodatendiensten und Geodaten basieren. <strong>Grundlagen der Hintergrundkarten:</strong>
          </p>

          <ul>
            <li>
              <strong>Stadtplan (grau)</strong>: Kartendienst (vektorbasiert) der cismet GmbH.
              Datengrundlage: <strong>cismet light</strong>. Wöchentlich in einem automatischen
              Prozess aktualisierte Bereitstellung der OpenStreetMap als Vektorlayer mit der
              OpenMapTiles-Server-Technologie. Lizenzen der Ausgangsprodukte:{" "}
              <a
                target='_legal'
                href='https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md'
              >
                Openmaptiles
              </a>{" "}
              und{" "}
              <a target='_legal' href='https://www.opendatacommons.org/licenses/odbl/1.0/'>
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) des Landes NRW. Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Landes NRW</strong> WMS-Dienst für farbige,
              digitale, georeferenzierte, lagegenaue, entzerrte Luftbilder des Landes NRW. (
              <a
                target='_legal'
                href='https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/luftbildinformationen/aktuell/digitale_orthophotos/index.html'
              >
                weitere Informationen
              </a>
              ). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR). Datengrundlagen:{" "}
              <strong>Stadtkarte 2.0.</strong> Wöchentlich in einem automatischen Prozess aktualisierte Zusammenführung
              des Straßennetzes der OpenStreetMap mit Amtlichen Geobasisdaten des Landes NRW aus den Fachverfahren
              ALKIS (Gebäude, Flächennutzungen) und ATKIS (Gewässer). © RVR und Kooperationspartner (Datenlizenz 
              Deutschland - Namensnennung - Version 2.0). Lizenzen der Ausgangsprodukte: Datenlizenz Deutschland 
              - Zero - Version 2.0 (Amtliche Geobasisdaten) und ODbL (OpenStreetMap contributors).
            </li>
            <li>
              <strong>DTK (bunt)</strong>: DTK Sammeldienst des Landes NRW. Datengrundlage:{" "}
              <strong>DTK (bunt)</strong>. Dieser Dienst enthält alle topographischen Kartenwerke des
              Landes Nordrhein-Westfalen sowie in den kleineren Maßstäben topographische Kartenwerke
              des Bundes. Angefangen von einer Übersichtskarte für NRW über die DTK500 bis zur
              DTK250 des Bundesamtes für Kartographie und Geodäsie und den topographischen Karten
              DTK100, DTK50, DTK25, DTK10 NRW von Geobasis NRW, bis hin zur ABK und ALKIS der
              Kommunen sind alle Standardkartenwerke in einem Layer vereint. Durch die
              voreingestellten Maßstabsbereiche wird gewährleistet, dass in jedem Maßstab die ideale
              Karte präsentiert wird. Nutzungsbedingungen: siehe{" "}
              <a
                target='_legal'
                href='http://www.bezreg-koeln.nrw.de/brk_internet/geobasis/lizenzbedingungen_geobasis_nrw.pdf'
              >
                Nutzungsbedingungen Geobasis NRW
              </a>
              , Für die DTK 250, DTK 500 gelten die Nutzungsbedingungen des BKG: ©{" "}
              <a target='_legal' href='www.govdata.de/dl-de/by-2-0'>
                GeoBasis-DE / BKG(2020) dl-de/by-2-0
              </a>
            </li>
          </ul>

          <p>
            Da die Hintergrundkartendienste immer wieder aktualisiert werden, kann es in Einzelfällen zu geringen 
            Abweichungen zu der Datengrundlage des Simulationsmodells kommen, bis dieses ebenfalls mit den neuen 
            Gebäuden/Objekten fortgeschrieben wird.
          </p>

          <p>
            Das Auskunfts- und Informationssystem (AIS) Starkregenvorsorge ist im Rahmen des
            DBU-Projektes KLAS in Bremen entwickelt und seitdem ergänzt worden.
          </p>
          

          
        </div>
      }
    />
  );
};
export default Component;
