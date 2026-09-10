import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
import TODOMarker from "./TODOMarker";

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
            maßgeblich. Die hieraus resultierende{" "}
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
            hydrologische Einzugsgebiet des Kreises Mettmann mit einer
            Auflösung von 1x1 Meter aufgebaut. Wesentliche Modellgrundlage ist
            das Digitale Geländemodell (DGM1). Als Grundlage hierfür dienen
            flächenhafte Höhenmessungen, die das Land NRW turnusmäßig mit einem
            Laserscanner aus einem Flugzeug heraus durchführt (Aufnahme durch Laseraltimetrie in den Jahren 2019, 2020 und 2022).{" "}
     
            Für die Simulation wurde das DGM1 um die Gebäude aus dem
            Liegenschaftskataster des Kreises Mettmann (Stand 01/2025){" "}
            ergänzt. Außerhalb des Kreisgebietes wurden
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
            zur möglichen Überflutung ableiten (s. auch Schaltfläche: 
              {" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("ModellfehlerMelden")}
            >
              Fehler im Geländemodell melden
            </a>
            ).
          </p>

          <p>
            Grundlage für die Modellanpassungen waren die kommunal verfügbaren
            Datensätze, Ortsbegehungen im Kreisgebiet und eine Prüfung auf Grundlage einer Testrechnung durch
            kommunale Vertreter:innen.
          </p>

          <p>Welche Daten wurden berücksichtigt?</p>

          <ul>
            <li>
              Landesweite Daten / Bezirksregierung Köln: Digitales
              Geländemodell (DGM1), Digitales Landschaftsmodell (DLM), ALKIS-Daten,
              ELWAS-Daten sowie Bodenkarte BK50 (Datenlizenz Deutschland Zero
              (
              <a
                target="_legal"
                href="https://www.govdata.de/dl-de/zero-2-0"
              >
                https://www.govdata.de/dl-de/zero-2-0
              </a>)).
            </li>

            <li>
              Kreis Mettmann: Flächennutzungs- und Gebäudedaten, Durchlass- und Verrohrungsdaten, Bauwerksinformationen sowie Angaben zu Brücken und Mauern.{" "}
            </li>

            <li>
              Bergisch-Rheinischer Wasserverband: Flächennutzungs- und Gebäudedaten, Durchlass- und Verrohrungsdaten, Bauwerksinformationen, Angaben zu Brücken und Mauern
            </li>

            <li>Kommunen: Unterschiedliche Datensätze zur Siedlungsentwässerung (Bauwerke und Kanalbestand), Durchlass- und Verrohrungsdaten, Informationen zu vergangenen 
              Schadensereignissen und umgesetzten Maßnahmen, Lage und Informationen zu geplanten bzw. laufenden Bauvorhaben, Gebäudedaten sowie Mauern. Die Daten wurden je 
              nach Verfügbarkeit von den Kommunen zur Modellbearbeitung bereitgestellt. Darüber hinaus erfolgte eine weitergehende Datenerfassung und Modellprüfung über eine Online-Karte.
            </li>

            </ul>

          <p>
            Zur Betrachtung der Ergebnisse stehen drei verschiedene
            Hintergrundkarten zur Verfügung, die auf den folgenden
            Geodatendiensten und Geodaten basieren:
          </p>
          <ul>
            <li>
              <strong>Stadtplan</strong>: Kartendienst (WMTS)
              des Verbandsgebiets vom RVR.
              Datengrundlage: <strong>Stadtplanwerk Ruhrgebiet (GrauBlau / Light). </strong> Dieser Dienst enthält
              einen Stadtplan für alle 53 Städte und Gemeinden im Ruhrgebiet.
              Nutzungsrechtshinweise: 
              <a
                target="_legal"
                href="https://hilfe.geoportal.ruhr/spw2-dokumentation/index.html"
              >
                 {" Stadtplanwerk Ruhrgebiet 2.0 "}
              </a>
               ©
               <a
                target="_legal"
                href="https://www.rvr.ruhr/"
              >
                 {" Regionalverband Ruhr "}
              </a> 
               und Kooperationspartner (
                <a
                target="_legal"
                href="https://www.govdata.de/dl-de/by-2-0"
              >
                 {"Datenlizenz Deutschland - Zero - Version 2.0"}
              </a> 
                ), Datengrundlagen: 
                <a
                target="_legal"
                href="https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/liegenschaftskataster/alkis/index.html"
              >
                 {" ALKIS"}
              </a>               
                , 
                <a
                target="_legal"
                href="https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/landschaftsmodelle/index.html"
              >
                 {" ATKIS "}
              </a>                 
               - Land NRW/Katasterämter (
                <a
                target="_legal"
                href="https://www.govdata.de/dl-de/by-2-0"
              >
                 {"Datenlizenz Deutschland - Zero - Version 2.0"}
              </a> 
              ) und © 
              <a
                target="_legal"
                href="https://www.openstreetmap.org/copyright"
              >
                 {" OpenStreetMap "}
              </a> 
               - Mitwirkende (License: 
                <a
                target="_legal"
                href="https://opendatacommons.org/licenses/odbl/"
              >
                 {" Open Database License"}
              </a> 
               ) {" "}
            </li>
            <li>
              <strong>Luftbildkarte</strong>: Kartendienst (WMS) der Bezirksregierung Köln.
              Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Landes NRW.</strong>{" "}
              WMS-Dienst für farbige, digitale, georeferenzierte, lagegenaue,
              entzerrte Luftbilder des Landes NRW. Nutzungsrechtshinweise: © Geobasis NRW, Bezirksregierung Köln.
              <a
                target="_legal"
                href="https://www.govdata.de/dl-de/zero-2-0"
              >
                 {" Datenlizenz Deutschland - Zero - Version 2.0."}
              </a>
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
