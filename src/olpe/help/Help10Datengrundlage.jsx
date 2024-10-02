import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import footerLogoUrl from "./assets/Signet_AIS_RZ.png";

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
          <img
            alt="aislogo"
            src={footerLogoUrl}
            style={{ width: 300, margin: 20 }}
            align="right"
          />
          <p>
            Die Starkregengefahrenkarte im AIS Starkregenvorsorge Olpe stellt in
            zwei umschaltbaren Kartenansichten maximale Wassertiefen bzw.
            maximale Fließgeschwindigkeiten im gesamten Stadtgebiet dar, die im
            Verlauf von zwei simulierten Starkregenereignissen berechnet wurden.
            Dazu wurde ein Raster der Geländeoberfläche mit einer Kantenlänge
            von 1 m genutzt. Die Wassertiefen und Fließgeschwindigkeiten werden
            jeweils mit einem Farbverlauf visualisiert. Der Farbverlauf für die{" "}
            <strong>Wassertiefen</strong> nutzt die Eckwerte 20 cm (hellblau),
            40 cm (blau), 75 cm (dunkelblau) und {">"} 100 cm (violett).
            Wassertiefen unter 10 cm werden nicht mehr farbig ausgeprägt
            (transparente Darstellung). Zur Visualisierung der{" "}
            <strong>Fließgeschwindigkeiten</strong>, angegeben in Meter pro
            Sekunde (m/s), werden die Eckwerte 0,5 m/s (gelb), 2,0 m/s
            (hellorange), 4,0 m/s (orange) und 10,0 m/s (dunkelorange)
            verwendet. Der untere Grenzwert für die farbige Anzeige einer
            Fließgeschwindigkeit liegt bei 0,5 m/s. Die Simulationsberechnungen
            wurden im Auftrag der Kreisstadt Olpe durch das Ingenieurbüro Dr.
            Pecher AG (Gelsenkirchen/Erkrath) durchgeführt. Die Bemessungsgrenze
            des Kanalnetzes wird in der Regel bei den hier simulierten
            Ereignissen überschritten. Große Anteile des Niederschlagwassers
            fließen oberirdisch ab. Je nach Flächennutzung liegen verschiedene
            Oberflächeneigenschaften vor. Diese werden im Modell über
            unterschiedliche Geländerauheiten und zeitlich variable
            Versickerungsansätze abgebildet. Relevante Retentionsräume sowie
            Gewässerverrohrungen und Durchlässe wurden aufgrund ihrer Bedeutung
            für die Ableitungs- und Speicherwirkung von Oberflächenwasser als
            Elemente in das Modell aufgenommen. Je nach Regen und
            Randbedingungen in der Realität können in Teilgebieten die
            Wassertiefen auf dem Gelände höher oder geringer ausfallen. Um diese
            Variationen zu verstehen und besser einschätzen zu können, sind die
            zwei unterschiedlichen Szenarien dargestellt.
          </p>

          <p>
            Die Simulationen basieren auf einem Digitalen Geländemodell (DGM1)
            von der Kreisstadt Olpe. Als Grundlage hierfür dienen flächenhafte
            Höhenmessungen, die das Land NRW turnusmäßig mit einem Laserscanner
            aus einem Flugzeug heraus durchführt (Aufnahme durch Laseraltimetrie
            im Jahr 2016). Das DGM1 wurde um die Gebäude aus dem
            Liegenschaftskataster von der Kreisstadt Olpe (07/2020) und wichtige
            verrohrte Gewässerabschnitte sowie Geländedurchlässe ergänzt, um
            eine hydrologisch korrekte Abflussberechnung zu gewährleisten. Sehr
            neue Gebäude, die nach dem Modellaufbau fertiggestellt wurden (z. B.
            Neubaugebiete) sind daher noch nicht im Datenbestand erfasst. Hier
            lassen sich aus dem angrenzenden Gelände dennoch wichtige Hinweise
            zur möglichen Überflutung ableiten (s. auch Schaltfläche: Fehler im
            Geländemodell melden).
          </p>

          <p>
            Darüber hinaus ist das Ergebnis der Simulation von der Dauer und
            Intensität des Regens abhängig, der für die Simulation angenommen
            wird. Wir bieten Ihnen hierzu zwei unterschiedliche{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              simulierte Szenarien
            </a>{" "}
            an, einen Starkregen (SRI 7) als "Modellregen" sowie einen extremen
            Starkregen (SRI 10) als "Modellregen".{" "}
          </p>

          <p>
            Das Auskunfts- und Informationssystem (AIS) Starkregenvorsorge ist
            im Rahmen des DBU-Projektes KLAS in Bremen entwickelt und seitdem
            ergänzt worden.
          </p>

          <p>
            Zur Betrachtung der Ergebnisse stellen wir Ihnen drei verschiedene
            Hintergrundkarten bereit, die auf den folgenden Geodatendiensten und
            Geodaten basieren:
          </p>

          <ul>
            <LicenseStadtplanTagNacht stylesDesc=" (grau)" />

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
            <LicenseStadtplanTagNacht stylesDesc="" />
          </ul>
        </div>
      }
    />
  );
};
export default Component;
