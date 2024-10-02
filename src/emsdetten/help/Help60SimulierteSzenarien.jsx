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
            Die berechneten Simulationen wurden mit "künstlichen"
            Modellregen durchgeführt. Bei einem Modellregen handelt es sich um
            eine flächenhafte Beregnung des kanalisierten Einzugsgebietes.
            Sie werden durch die Dauer (in Stunden, abgekürzt "h"), die 
            in dieser Zeit fallende Regenmenge (in Liter pro Quadratmeter, abgekürzt "l/m²")
            und den zeitlichen verlauf der Regenintensität definiert.
            Für die zeitliche Entwicklung der Intensität wurden zwei unterschiedliche Verläufe genutzt.
            Für den Starkregen SRI 7 wurde ein sogenannter Eulerregen Typ II 
            (unterschiedliche Intensitäten in 5-Minuten Abschnitten)
            genutzt. Der extreme Starkregen (SRI 8) basiert auf den Regenmessungen eines wirklich 
            aufgetretenen Starkregenereignisses an der Niederschlagsmessstation St. Arnold. Dieser lokal aufgetretene extreme Starkregen wurde im Modell für die
            Beregnung des kanalisierten Stadtgebietes angesetzt.
          </p>

          <p>
            Zur Einteilung der Starkregen dient der ortsbezogene{" "}
            <strong>Starkregenindex (SRI)</strong> nach Schmitt, der
            Niederschläge in eine Skala von 1 bis 12 einteilt. Der Starkregenindex
            wird durch eine statistische Auswertung von sehr langen vorliegenden
            Regenmessungen an die örtlichen Gegebenheiten angepasst. Starkregen
            mit SRI 6 bis 7 (<strong>außergewöhnliche Starkregen</strong>) haben
            statistische Wiederkehrzeiten von 50 bis 100 Jahren. Für noch
            stärkere <strong>extreme Starkregen</strong> lässt sich aus der
            Statistik kein verlässliches Wiederkehrintervall mehr ableiten
            (seltener als einmal in 100 Jahren).
          </p>

          <p>
            <strong>Simulierte Szenarien:</strong>
          </p>

          <ul>
            <li>
              <strong>SRI 7</strong>: außergewöhnliches Starkregenereignis für das kanalisierte Einzugsgebiet Emsdettens,
              Dauer 60 min, Niederschlagssumme von 40,8 l/m², Eulerregen Typ II, SRI 7, 100-jährliche Wiederkehrzeit nach
              KOSTRA-DWD-2010R
            </li>

            <li>
              <strong>SRI 8</strong>: extremes Starkregenereignis für das kanalisierte Einzugsgebiet Emsdettens, Dauer 60 min,
              Niederschlagssumme 60 l/m², St. Arnold, SRI 8, Wiederkehrzeit größer als 100 Jahre
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
