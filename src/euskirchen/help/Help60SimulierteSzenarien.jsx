import React, { useContext } from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";

const Component = ({ uiState, uiStateActions }) => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      uiState={uiState}
      uiStateActions={uiStateActions}
      sectionKey="szenarien"
      sectionTitle="Simulierte Szenarien"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Zwei der berechneten Simulationen wurden mit "künstlichen"
            Modellregen durchgeführt. Bei diesen Simulationen erfolgt eine
            flächenhafte Beregnung des gesamten Gebiets mit statistisch
            ermittelten oder angenommenen Niederschlagsbelastungen. Die
            verwendeten <strong>Modellregen</strong> werden durch die Dauer (in
            Stunden, abgekürzt "h"), die in dieser Zeit fallende Regenmenge (in
            Liter pro Quadratmeter, abgekürzt "l/m²") definiert. Die Modellregen
            haben eine zeitliche Dauer von 60 Minuten und werden als sogenannte{" "}
            <strong>Blockregen</strong> verwendet. Das bedeutet, dass der
            Intensitätsverlauf über die gesamte Dauer des Ereignisses konstant
            ist. Im Anschluss an das Niederschlagsereignis werden weitere 60
            Minuten Nachlaufzeit simuliert.
          </p>

          <p>
            Im dritten Szenario wurden Niederschlagsdaten vom 14.07.2021
            verwendet und damit ein wichtiger Ausschnitt der Niederschlagsbelastung des
            Ereignisses vom 14. und 15.07.2021 abgebildet. Der Vorregen vom 13.07.2021
            konnte im Rahmen des Projekts nicht betrachtet werden. Grundlage für die Abbildung des
            Niederschlags bilden Radar-Komposit-Daten aus dem DX-Offline-Projekt, die durch das LANUV
            bereitgestellt wurden. Die aufbereiteten Radarniederschlagsdaten bilden das Niederschlagsgeschehen
            mit einer räumlichen Auflösung von 1 x 1 Kilometern und einer
            zeitlichen Auflösung von 5 Minuten ab. Hierdurch ergibt sich ein zeitlich variabler Intensitätsverlauf
            über die gesamte Dauer des simulierten Ereignisses. Die Simulationen betrachten den Niederschlagszeitraum am 14.07.2021 von
            06:30 Uhr bis 22:00 Uhr. Anschließend wurden noch weitere 210
            Minuten Nachlaufzeit simuliert. Mit diesen Simulationsbedingungen
            werden insbesondere auch Hochwasserprozesse betrachtet, wobei keine
            lokale Kalibrierung der Niederschlags-Abflussprozesse erfolgen konnte.
            Neben den Niederschlagsdaten wurden in den Simulationen keine
            weiteren hydrologischen Daten zum Ereignis aus 2021 verwendet. Eine
            detaillierte Betrachtung des Ereignisses kann z. B. im Rahmen des
            Hochwasserrisikomanagements erfolgen. Die dargestellten maximalen Wassertiefen und Fließgeschwindigkeiten
            bilden die Niederschlagsbelastung vom 14.07.2021 und den Modellstand mit den Geländedaten
            aus 2021/2022 (nach dem 15.07.2021) ab. Weitere Hinweise
            sind im Reiter{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              "Aussagekraft der Simulationen"
            </a>
            &nbsp;zu finden.
          </p>

          <p>
            Zur Einteilung der Starkregen dient der ortsbezogene{" "}
            <strong>Starkregenindex (SRI)</strong> nach Schmitt, der
            Niederschläge in eine Skala von 1 bis 12 einteilt, vergleichbar mit
            der Klassifizierung von Erdbeben nach Mercalli. Der Starkregenindex
            wird durch eine statistische Auswertung von sehr langen vorliegenden
            Regenmessungen an die örtlichen Gegebenheiten angepasst. Starkregen
            mit SRI 6 bis 7 (<strong>außergewöhnliche Starkregen</strong>) haben
            statistische Wiederkehrzeiten von 50 bis 100 Jahren. Für noch
            stärkere <strong>extreme Starkregen</strong> lässt sich aus der
            Statistik kein verlässliches Wiederkehrintervall mehr ableiten
            (seltener als einmal in 100 Jahren). Der Niederschlag, der in
            Münster 2014 mit insgesamt 292 mm gemessen wurde und starke Schäden
            verursachte, gehört z. B. zu der Stufe SRI 12.
          </p>

          <p>
            Mit diesen Erläuterungen lassen sich die drei simulierten Szenarien
            wie folgt zusammenfassen:
          </p>

          <ul>
            <li>
              <strong>Stärke 7</strong>: außergewöhnliches Starkregenereignis,
              Dauer 60 min, räumlich differenze Niederschlagssumme von 40,8 bis
              44,8 l/m², Blockregen , SRI 7, 100-jährliche Wiederkehrzeit nach
              KOSTRA-DWD-2020
            </li>

            <li>
              <strong>Stärke 9/10</strong>: extremes Starkregenereignis, Dauer
              60 min, Niederschlagssumme 90 l/m², Blockregen, SRI 9 bzw. 10 (je nach Lage im Kreisgebiet),
              Wiederkehrzeit deutlich größer als 100 Jahre
            </li>

            <li>
              <strong>Niederschlag 14.07.2021</strong>: Abbildung der Niederschlagsbelastung im Zeitraum 06:30
              Uhr bis 22:00 Uhr, räumlich differenzierte Niederschlagsbelastung
              und -verteilung, Betrachtung ortsspezifischer Belastungen,
              Wiederkehrzeiten und Einteilung des SRI erforderlich.
            </li>
          </ul>
          <p>
          Hinweise zur Fortschreibung des AIS: Die dargestellten Simulationsergebnisse wurden im
          <strong> August 2025 als Version 1.1 aktualisiert</strong>. Als Grundlage für die Aktualisierung sind
          folgende Modellanpassungen erfolgt:
          </p>

          <ul>
            <li>
              <strong>Anpassung Höhenmodell</strong>: Im Zuge der Aktualisiserung wurden alle Hinweise, die über
              die Funktion {" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("ModellfehlerMelden")}
            >
              "Fehler im Geländemodell melden"
            </a>
            &nbsp;gemeldet wurden, geprüft. Sofern eine Anpassung des Höhenmodells erforderlich war, wurde diese umgesetzt. Darüberhinaus wurden
            Modellfehler oder inzwischen erfolgte Veränderungen (z. B. Anpassung von Durchlässen, Errichtung von Mauern, Abriss von Gebäuden),
            die durch die kreisangehörigen Kommunen gemeldet wurden, in das Höhenmodell eingearbeitet.
            </li>

            <li>
              <strong>Anpassung der Oberflächenparameter für das Szenario "Niederschlag 14.07.2021"</strong>: Rückmeldung zu den Simulationsergebnisse
              für dieses Szenario haben gezeigt, dass die Versickerungseigenschaften des Bodens für Teilbereiche des Kreisgebiets überschätzt wurden. Daher wurde
              das Infiltationsvermögen kreisweit reduziert. In Teilbereichen (z. B. Zülpich oder Weilerswist) ergeben sich hierdurch deutliche Veränderungen im
              Überflutungsgeschehen. Bitte beachten Sie, dass diese grundsätzlichen Herausforderung für die Simulation dieses Szenario weiterhin erhalten bleiben.
              Bitte berücksichtigen Sie daher die Hinweise unter {" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              "Aussagekraft der Simulationen"
            </a>. 
            </li>

          </ul>
        </div>
      }
    />
  );
};
export default Component;
