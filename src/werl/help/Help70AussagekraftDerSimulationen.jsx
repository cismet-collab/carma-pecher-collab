import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="aussagekraft"
      sectionTitle="Aussagekraft der Simulationen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte zeigt die Ergebnisse von Simulationen,
            die dem heutigen Stand der Technik entsprechen. Die Berechnungen
            basieren auf einem vereinfachten Modell der tatsächlichen
            Verhältnisse, mit dem sich kritischere Bereiche jedoch gut bestimmen
            lassen. Für eine noch differenziertere Modellierung müssten höher
            aufgelöste Geländedaten sowie detailliertere hydrologische
            Grundlagen vorliegen und kleinräumige Strukturen wie Gartenmauern
            detailliert eingearbeitet werden.{" "}
          </p>

          <p>Was sind die wichtigsten Annahmen, die getroffen wurden?</p>

          <ul>
            <li>
              Abfließendes Regenwasser findet in Kellergeschossen oder
              Tiefgaragen ein Rückhaltevolumen, das nicht berücksichtigt werden
              konnte. Hierzu fehlen weitergehende Daten. Zudem sind die
              Verhältnisse in den Gebäuden aufgrund der unbekannten Ein- und
              Austrittspunkte auch noch nicht modellierbar.
            </li>

            <li>
              Variable Anteile des Regenwassers versickern oder verdunsten in
              der Realität. Für die Simulationen wurden räumlich verteilte
              Versickerungseffekte angesetzt. Die Versickerung ist jedoch stark
              von den Ausgangsbedingungen abhängig. Hat es bpsw. vor einem
              Starkregen bereits geregnet, versickert weniger Wasser. Ist der
              Boden andersherum zu trocken, ist die Anfangsinfiltration sehr
              gering, d. h. dass auch dann zunächst weniger Wasser versickert
              und mehr Wasser abflusswirksam wird. Insbesondere in den nicht
              befestigten Außenbereichen sind diese Variationen und
              Einflussmöglichkeiten zu berücksichtigen. Der Einfluss der Interzeption wurde
              für verschiedene Landnutzungen (z. B. Wald) berücksichtigt. Weitere hydrologische
              Prozesse, z. B. Zwischenabfluss, werden nicht berücksichtigt. Die
              Verdunstung spielt bei den hier betrachteten kurzen Niederschlägen
              nur eine untergeordnete Rolle.
            </li>

            <li>
              In Abhängigkeit der Flächennutzung wurden verschiedene Rauheiten
              angesetzt. Dies führt zu unterschiedlichen
              Abflussgeschwindigkeiten auf den Oberflächen. Auf land- und
              forstwirtschaftlich genutzten Flächen sowie Grünflächen läuft das
              Oberflächenwasser aufgrund der Vegetation langsamer ab. Im
              Gegensatz dazu läuft auf befestigen Flächen wie Straßen das
              Regenwasser schneller ab.
            </li>

            <li>
              Das Kanalnetz wurde nicht weiter berücksichtigt. Zu der detaillierten Wirkung von
              Abflüssen innerhalb des Kanalnetzes hat der Kommunalbetrieb gesonderte Fachberechnungen vorliegen. 
              Die dargestellten Starkregen zeichnen sich
              durch hohe Regenintensitäten oberhalb der Bemessungsgrenze des
              Kanalnetzes aus. Über das Kanalnetz kann zwar ein gewisses
              Niederschlagsvolumen aufgenommen und abgeführt werden, allerdings
              sind die Kanalnetze nicht für die dargestellten Starkregen
              dimensioniert und müssen es auch nicht sein. Daher fließen bei den
              dargestellten Starkregen große Anteile oberirdisch ab oder können
              nicht mehr in das Kanalnetz eintreten.
            </li>

            <li>
            Lokale Verhältnisse sind immer zur prüfen. Dabei sind auch die Funktion und Wirkung von Grundstücksentwässerungsanlagen zu berücksichtigen. 
            Diese können im Modell für das gesamte Stadtgebiet nicht berücksichtigt werden. Die Abbildung von bereits getroffenen Maßnahmen wie 
            Fließhindernisse (z. B. Mauern) in unmittelbarer Nähe zum Gebäude oder Entwässerungsanlagen auf dem Grundstück
            sollte ortsspezifisch ebenfalls überprüft werden.
            </li>

          </ul>

          <p>
            <strong>
            Die Modellannahmen, die stadtgebietsweite Verteilung der Niederschläge sowie potenzielle Fehler im Geländemodell
            können zu Abweichungen zwischen den Simulationsergebnissen und tatsächlich beobachteten Überflutungen infolge von
            Starkregen führen. Niederschläge der Stufen SRI 7 bzw. 11 können, abhängig von den konkreten Randbedingungen, in der
            Realität zu etwas geringeren oder auch höheren Wassertiefen auf der Geländeoberfläche führen. </strong>{" "}
            </p>

            <p>
            Starkregenereignisse sind
            häufig lokal begrenzt und sehr dynamisch. Die sogenannten Starkregenzellen weisen in der Regel eine geringe räumliche Ausdehnung auf.
            Durch das Überqueren des Stadtgebiets können jedoch auch größere Bereiche betroffen sein. Dieser Prozess ist sehr variabel
            und unterscheidet sich von Ereignis zu Ereignis. Auch die Zugrichtung der Zellen hat Einfluss auf das Überflutungsgeschehen.
            Die Unsicherheiten wurden in der Modellierung berücksichtigt, indem eine flächendeckende
            Überregnung des Stadtgebiets angenommen wurde.
            </p>

          <p>
            Die unterschiedlichen Betroffenheiten im Stadtgebiet lassen sich
            aber sehr gut mit den Ergebnisdarstellungen aufzeigen. Die
            dargestellten Szenarien (außergewöhnliches und extremes
            Starkregenereignis) zeigen eine mögliche Spannweite der
            Überflutungen im Modell auf. Je nach Betroffenheit und
            Schadenspotential lassen sich auf dieser Grundlage Vorsorgemaßnahmen
            bewerten.
          </p>

          <p>
            Da nicht alle kleinräumigen Strukturen im Digitalen Geländemodell
            (DGM1), das vom Land NRW zur Verfügung gestellt und für die
            Simulationen verwendet wird, abgebildet werden können, bitten wir
            Sie, dabei zu helfen, das DGM sukzessive zu verbessern, indem Sie
            vermutete{" "}
            <a
              onClick={() => setAppMenuActiveMenuSection("modellfehlermelden")}
            >
              Fehler im Geländemodell melden
            </a>
            ! Bedenken Sie, dass es sein kann, dass ein neues Gebäude in den
            Simulationen nicht berücksichtigt wurde, weil es zum Zeitpunkt der
            Datenbereitstellung für die Simulationsberechnungen noch nicht im
            Liegenschaftskataster nachgewiesen war oder ggf. ein Gebäude
            inzwischen abgerissen wurde.
          </p>
        </div>
      }
    />
  );
};
export default Component;
