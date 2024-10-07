import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey='aussagekraft'
      sectionTitle='Aussagekraft der Simulationen'
      sectionBsStyle='info'
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte zeigt die Ergebnisse von Simulationen, die dem heutigen
            Stand der Technik entsprechen. Die Berechnungen basieren auf einem vereinfachten Modell
            der tatsächlichen Verhältnisse, mit dem sich kritischere Bereiche jedoch gut bestimmen
            lassen. Für eine noch differenziertere Modellierung fehlen derzeit noch genauere
            Geländedaten und Daten kleiner Strukturen (Gartenmauern, Grundstücksentwässerung etc.).{" "}
          </p>

          <p>Was sind die wichtigsten Annahmen, die getroffen wurden?</p>

          <ul>
            <li>
              Abfließendes Regenwasser findet in Kellergeschossen ein Rückhaltevolumen, das nicht
              berücksichtigt werden konnte. Hierzu fehlen weitergehende Daten. Zudem sind die
              Verhältnisse in den Gebäuden aufgrund der unbekannten Ein- und Austrittspunkte auch
              noch nicht modellierbar.
            </li>

            <li>
              Variable Anteile des Regenwassers versickern oder verdunsten in der Realität. In den
              dargestellten Berechnungen wurden mittlere variable Versickerungseffekte angesetzt.
              Die Versickerung ist jedoch stark von den Ausgangsbedingungen abhängig. Hat es vor
              einem Starkregen bereits geregnet, versickert weniger Wasser. Insbesondere in den
              nicht befestigten Außenbereichen sind diese Variationen daher zu betrachten. Die
              Verdunstung spielt bei den hier betrachteten kurzen Niederschlägen nur eine sehr
              untergeordnete Rolle.
            </li>

            <li>
              In Abhängigkeit der Flächennutzung wurden verschiedene Rauheiten angesetzt. Dies führt
              zu unterschiedlichen Abflussgeschwindigkeiten auf den Oberflächen. Auf land- und
              forstwirtschaftlich genutzten Flächen sowie Grünflächen läuft das Oberflächenwasser
              aufgrund der Vegetation langsamer ab. Im Gegensatz dazu läuft auf befestigen Flächen
              wie Straßen das Regenwasser schneller ab. Auch die Oberflächenrauheiten können auf
              Grund von Umgebungsbedingungen beeinflusst werden.
            </li>

            <li>
              Das Kanalnetz wurde über einen differenzierten Verlustansatz berücksichtigt und die
              Berücksichtigung von Kanalnetzüberstau abgebildet. Dazu wurden die Ergebnisse von
              Kanalnetzberechnungen ausgewertet. Zu der detaillierten Wirkung von Abflüssen
              innerhalb des Kanalnetzes hat der STEB Paderborn gesonderte Fachberechnungen
              vorliegen. Die dargestellten Starkregen zeichnen sich durch hohe Regenintensitäten
              oberhalb der Bemessungsgrenze des Kanalnetzes aus. Über das Kanalnetz kann zwar eine
              gewisse Menge an Regenwasser aufgenommen und abgeführt werden, allerdings fließen bei
              den dargestellten Starkregen große Anteile oberirdisch ab oder können nicht mehr in
              das Kanalnetz eintreten.
            </li>
          </ul>

          <p>
            <strong>
              Die Modellannahmen, die stadtgebietsweite Niederschlagsbelastung und Fehler im
              Geländemodell führen dazu, dass es zu Abweichungen zwischen den Simulationsergebnissen
              und beobachteten Starkregen kommen kann. Niederschläge der Stufe SRI 7 bzw. 10 können
              daher je nach Randbedingungen und Niederschlagsverteilung in der Realität auch etwas
              geringere oder höhere Wassertiefen zur Folge haben. Beobachtete Starkregenereignisse
              mit einer ähnlichen Niederschlagssumme können deutliche Unterschiede im
              Intensitätsverlauf haben. Damit geht auch ein differenzierter zeitlicher Verlauf der
              Ereignisse einher, sodass bei der Betrachtungen des zeitlichen Verlaufs mit
              Abweichungen zu rechnen ist.
            </strong>{" "}
            Die unterschiedlichen Betroffenheiten im Stadtgebiet lassen sich aber sehr gut mit den
            Ergebnisdarstellungen aufzeigen. Die beiden Szenarien (außergewöhnliches und extremes
            Starkregenereignis) zeigen eine mögliche Spannweite der Überflutungen im Modell auf. Je
            nach Betroffenheit und Schadenspotential lassen sich auf dieser Grundlage
            Vorsorgemaßnahmen bewerten. Die Darstellung des zeitlichen Verlaufs ermöglicht zudem die
            Prozesse der Gefährdung besser einzuschätzen. So können beispielsweise Senken
            identifiziert werden die bei einem Starkregen besonders früh betroffen (gefüllt) sind.
          </p>

          <p>
            Auch das Digitale Geländemodell (DGM1), das vom Land NRW zur Verfügung gestellt und für
            die Simulationen verwendet wird, kann vereinzelt noch Fehler aufweisen oder kleinste
            Strukturen nicht richtig erfassen. Helfen Sie dabei, das DGM sukzessive zu verbessern,
            indem Sie vermutete{" "}
            <a
              className='renderAsLink'
              onClick={() => setAppMenuActiveMenuSection("modellfehlermelden")}
            >
              Fehler im Geländemodell melden
            </a>
            ! Zuletzt kann es sein, dass ein neues Gebäude in den Simulationen nicht berücksichtigt
            wurde, weil es zum Zeitpunkt der Datenbereitstellung für die Simulationsberechnungen
            noch nicht im Liegenschaftskataster nachgewiesen war oder ggf. ein Gebäude inzwischen
            abgerissen wurde. Auch bei der Gebäudezuordnung (Nutzung) können Diskrepanzen auftreten.
          </p>
        </div>
      }
    />
  );
};
export default Component;
