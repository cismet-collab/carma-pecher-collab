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
            aufgelöste Geländedaten, sowie detailliertere hydrologischen
            Grundlagen vorliegen und kleinräumige Strukturen (z. B. Gartenmauern)
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
              Einflussmöglichkeiten zu berücksichtigen. Weitere hydrologische
              Prozesse, z. B. Interzeption, werden nicht berücksichitgt. Die
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
              Das Kanalnetz wurde vereinfacht über einen Verlustansatz
              berücksichtigt. Zu detaillierten Wirkungen von Abflüssen innerhalb
              des Kanalnetzes liegen in den Kommunen ggf. gesonderte
              Fachberechnungen vor. Die dargestellten Starkregen zeichnen sich
              durch hohe Regenintensitäten oberhalb der Bemessungsgrenze des
              Kanalnetzes aus. Über das Kanalnetz kann zwar ein gewisses
              Niederschlagsvolumen aufgenommen und abgeführt werden, allerdings
              sind die Kanalnetze nicht für die dargestellten Starkregen
              dimensioniert und müssen es auch nicht sein. Daher fließen bei den
              dargestellten Starkregen große Anteile oberirdisch ab oder können
              nicht mehr in das Kanalnetz eintreten.
            </li>

            <li>
              Lokale Verhältnisse sind immer zur prüfen. Dabei sind auch die Funktion und Wirkung
              von Grundstücksentwässerungsanlagen zu berücksichtigen. Diese können im Modell
              für das gesamte Kreisgebiet nicht berücksichtigt werden. Die Abbildung von bereits getroffenen
              Maßnahmen sollte ortsspezifisch ebenfalls überprüft werden.  
            </li>
          </ul>

          <p>
            <strong>
              Die Modellannahmen, die abgebildete (gebietsweite) Niederschlagsbelastung
              und Fehler im Geländemodell können dazu führen, dass es zu
              Abweichungen zwischen den Simulationsergebnissen und beobachteten
              Überflutungen infolge von Starkregen kommen kann. Niederschläge
              der Stufe SRI 7 bzw. 9/10 können daher je nach Randbedingungen in
              der Realität auch geringere oder höhere Wassertiefen auf der
              Geländeoberfläche zur Folge haben.
            </strong>{" "}
            Die unterschiedlichen Betroffenheiten im Stadt- bzw. Kreisgebiet lassen sich
            aber sehr gut mit den Ergebnisdarstellungen aufzeigen. Die
            dargestellten Szenarien (außergewöhnliches und extremes
            Starkregenereignis) zeigen eine mögliche Spannweite der
            Überflutungen im Modell auf. Je nach Betroffenheit und
            Schadenspotential lassen sich auf dieser Grundlage Vorsorgemaßnahmen
            bewerten.
          </p>

          <p>
            <strong>
              {" "}
              Bitte berücksichtigen Sie, dass die Ergebnisse des dritten
              Szenarios (Simulation des Niederschlags vom 14. Juli 2021)
              nicht unmittelbar mit den Ergebnissen der Modellregen (SRI 7 und SRI 9/10)
              verglichen werden können.{" "}
            </strong>{" "}
            Das Niederschlagsereignis im Juli 2021 war ein extremes Ausnahmeereignis,
            welches aus dem komplexen Zusammenwirken vieler Randbedingungen entstanden
            ist. Alle Randbedingungen können im Modell nicht abgebildet werden.
            Die Simulationsergebnisse des Szenarios basieren auf der Grundlage des Niederschlagsverlaufes, der damals
            erfasst wurde. Weitere hydrologische Grundlagen, wie bspw.
            Hochwassereinflüsse oder Umstände, die bspw. zu Zerstörung
            von Brücken, Rückhalteräumen oder Gebäuden geführt haben, können nicht abgebildet
            werden. Diese Prozesse hatten einen Einfluss auf das Überflutungsgeschehen am 14. und 15.07.2021.
            Bereiche in der Nähe großer Gewässer oder Gewässer, die unter besonderem
            Hochwassereinfluss stehen können, sollten grundsätzlich nur unter
            Hinzunahme und Berücksichtigung der geltenden
            Hochwassergefahrenkarten interpretiert werden. Weiterhin ist zu
            bedenken, dass das für die Simulation verwendete Geländemodell aus
            Befliegungsdaten stammt, die nach dem Ereignis aufgenommen wurden. Auch
            hier treten zwangsläufig Differenzen zwischen den Simulationsergebnissen
            und den damaligen Folgen und Geschehnissen auf. Bereiche, in
            denen (auch infolge des Ereignisses) große, für das Abflussgeschehen
            bedeutsame Maßnahmen in Umsetzung sind oder bereits umgesetzt wurden, werden
            daher in der Karte mit einem extra Layer abgedeckt, um Irritationen und
            Missverständnisse zu vermeiden. Es soll betont werden, dass der Fokus
            dieser Karte auf der Starkregenvorsorge liegt und nicht auf der
            Reproduktion des realen Ereignisses von 2021.
          </p>
          <p>
            Da nicht alle kleinräumigen Strukturen im Digitalen Geländemodell
            (DGM1), das vom Land NRW zur Verfügung gestellt und für die
            Simulationen verwendet wird, abgebildet werden können, bitten wir
            Sie, dabei zu helfen, das DGM sukzessive zu verbessern, indem Sie
            vermutete{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("ModellfehlerMelden")}
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
