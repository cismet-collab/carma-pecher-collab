import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="datengrundlage"
      sectionTitle="Datengrundlagen"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Modellgrundlagen und -annahmen beeinflussen die Ergebnisse
            maßgeblich. Die hierausresultierende{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              Aussagekraft der Simulationen
            </a>{" "}
            wird gesondert beschrieben.
          </p>

          <p>
            Die Simulationen wurden mit einem Oberflächenabflussmodell für das
            hydrologische Einzugsgebiet des Kreises Euskirchen mit einer
            Auflösung von 1x1 Meter aufgebaut. Wesentliche Modellgrundlage ist
            das Digitale Geländemodell (DGM1). Als Grundlage hierfür dienen
            flächenhafte Höhenmessungen, die das Land NRW turnusmäßig mit einem
            Laserscanner aus einem Flugzeug heraus durchführt (Aufnahme durch
            Laseraltimetrie in den Jahren 2021 und 2022). Für die Simulation wurde das
            DGM1 um die Gebäude aus dem Liegenschaftskataster des Kreises
            Euskirchen (Stand 10/2022) ergänzt. Außerhalb des Kreisgebietes wurden
            Daten des Bundesamts für Kartographie und Geodäsie verwendet
            (Bundesamt für Kartographie und Geodäsie, <a
                target="_legal"
                href="http://sg.geodatenzentrum.de/web_public/gdz/datenquellen/Datenquellen_TopPlusOpen.pdf"
              >
                © GeoBasis-DE / BKG
            (2023)
              </a>).
                      </p>

          <p>
            Das Oberflächenmodell wurde anschließend um wichtige verrohrte
            Gewässerabschnitte, Geländedurchlässe und weitere Fließhindernisse ergänzt, um eine
            hydrologisch korrekte Abbildung von potenziellen Fließwegen zu gewährleisten. In diesem
            Rahmen wurden auch weitere Fließhindernisse wie z. B. Mauern ergänzt
            und maßgebliche siedlungswasserwirtschaftliche Bauwerke (Hochwasser-
            und Regenrückhaltebecken) mit ihrer Wirkung im Oberflächenmodell
            abgebildet. Zusätzlich wurden die Gebäude auf Aktualität geprüft und
            abgerissene oder fehlende Gebäude(-teile) gegebenenfalls angepasst. Sehr
            neue Gebäude, die nach dem Modellaufbau fertiggestellt wurden (z. B.
            Neubaugebiete) sind daher noch nicht im Datenbestand erfasst. Hier
            lassen sich aus dem angrenzenden Gelände dennoch wichtige Hinweise
            zur möglichen Überflutung ableiten (s. auch Schaltfläche: Fehler im
            Geländemodell melden).
          </p>

          <p>
            Grundlage für die Modellanpassungen waren die kommunal verfügbaren
            Datensätze, Ortsbegehungen im Kreisgebiet und eine Prüfung durch
            kommunale Vertreter:innen. Auf Grundlage von Testrechnungen wurde
            das Modell anschließend gemeinsam mit Vertreter:innen aus den
            Kommunen geprüft und angepasst.
          </p>

          <p>Welche Daten wurden berücksichtigt?</p>

          <ul>
            <li>
              Landesweite Daten / Bezirksregierung Köln: Digitales
              Geländemodell (DGM1), Digitales Landschaftsmodell, ALKIS-Daten,
              ELWAS-Daten (Datenlizenz Deutschland Zero
              (
              <a
                target="_legal"
                href="https://www.govdata.de/dl-de/zero-2-0"
              >
                https://www.govdata.de/dl-de/zero-2-0
              </a>))
            </li>

            <li>
              Kreis Euskirchen: Auszüge Liegenschaftskataster, Flächennutzung, Dokumentation
              Ereignis vom 14. und 15.07.2021
            </li>

            <li>Erftverband: Querprofile, Bauwerksinformationen</li>

            <li>
              Wasserverband Eifel-Rur: Bauwerksinformationen, Informationen zu
              Stauanlagen
            </li>

            <li>Kommunen: Unterschiedliche Datensätzen zur Siedlungsentwässerung (Bauwerke und Kanalbestand), Lage von Verrohrungen und Durchlässen,
                bisherigen Schadensereignissen und umgesetzten Maßnahmen nach dem Ereignis 2021. Die Daten wurden je nach Verfügbarkeit in den Kommunen
                zur Modellbearbeitung zur Verfügung gestellt. Darüber hinaus erfolgte eine weitergehende Datenerfassung und Modellprüfung in einer Online-Karte.
                
            </li>

            </ul>

          <p>
            Zur Betrachtung der Ergebnisse stehen drei verschiedene
            Hintergrundkarten zur Verfügung, die auf den folgenden
            Geodatendiensten und Geodaten basieren:
          </p>
          <ul>
            <li>
              <strong>Stadtplan (grau)</strong>: Kartendienst (vektorbasiert)
              der cismet GmbH. Datengrundlage: <strong>cismet light</strong>.
              Wöchentlich in einem automatischen Prozess aktualisierte
              Bereitstellung der OpenStreetMap als Vektorlayer mit der
              OpenMapTiles-Server-Technologie. Lizenzen der Ausgangsprodukte:{" "}
              <a
                target="_legal"
                href="https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md"
              >
                Openmaptiles
              </a>{" "}
              und{" "}
              <a
                target="_legal"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) des RVR.
              Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Landes NRW</strong>{" "}
              WMS-Dienst für farbige, digitale, georeferenzierte, lagegenaue,
              entzerrte Luftbilder des Landes NRW. (
              <a
                target="_legal"
                href="https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/luftbildinformationen/aktuell/digitale_orthophotos/index.html"
              >
                weiter Informationen
              </a>
              ). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR).
              Datengrundlagen: <strong>Stadtkarte 2.0</strong> und{" "}
              <strong>Kartenschrift aus der Stadtkarte 2.0</strong>. (Details s.
              Hintergrundkarte Stadtplan).
            </li>
            <li>
              <strong>DTK (bunt)</strong>: DTK Sammeldienst des Landes NRW.
              Datengrundlage: <strong>DTK (bunt)</strong> Dieser Dienst enthält
              alle topographischen Kartenwerke des Landes Nordrhein-Westfalen
              sowie in den kleineren Maßstäben topographische Kartenwerke des
              Bundes. Angefangen von einer Übersichtskarte für NRW über die
              DTK500 bis zur DTK250 des Bundesamtes für Kartographie und
              Geodäsie und den topographischen Karten DTK100, DTK50, DTK25,
              DTK10 NRW von Geobasis NRW, bis hin zur ABK und ALKIS der Kommunen
              sind alle Standardkartenwerke in einem Layer vereint. Durch die
              voreingestellten Maßstabsbereiche wird gewährleistet, dass in
              jedem Maßstab die ideale Karte präsentiert wird.
              Nutzungsbedingungen: siehe{" "}
              <a
                target="_legal"
                href="http://www.bezreg-koeln.nrw.de/brk_internet/geobasis/lizenzbedingungen_geobasis_nrw.pdf"
              >
                Nutzungsbedingungen Geobasis NRW
              </a>
              , Für die DTK 250, DTK 500 gelten die Nutzungsbedingungen des BKG:
              ©{" "}
              <a target="_legal" href="www.govdata.de/dl-de/by-2-0">
                GeoBasis-DE / BKG(2020) dl-de/by-2-0
              </a>
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
