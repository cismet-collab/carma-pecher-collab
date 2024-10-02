import React, { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="wasserstand"
      sectionTitle="Max. Wassertiefe oder Fließgeschwindigkeit abfragen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
          Am oberen Rand des Kontrollfeldes befindet sich eine platzsparende Legende, mit der 
          die zur Klassifizierung der maximalen simulierten Wassertiefen bzw. Fließgeschwindigkeiten 
          verwendeten Farben erläutert werden: 
          </p>
          <p>
            <strong>Eckwerte der Visualisierung für die Wassertiefen</strong>
          </p>
            <ul>
              <li> &lt; 5 cm (transparente bzw. keine Darstellung),</li>
              <li> 20 cm (hellblau),</li>
              <li> 40 cm (blau),</li>
              <li> 75 cm (dunkelblau) und</li>
              <li> &gt; 100 cm (violett).</li>
            </ul>
          <p>
              <strong>Eckwerte der Visualisierung für die Fließgeschwindigkeiten</strong>
          </p>
            <ul>
              <li> &lt; 0,1 m/s (transparente bzw. keine Darstellung),</li>
              <li> 0,1 m/s (gelb),</li>
              <li> 0,3 m/s (hellorange),</li>
              <li> 0,5 m/s (orange) und</li>
              <li> &gt; 1 m/s (dunkelorange).</li>
            </ul>
          <p>
          Je nach Regen und Randbedingungen in der Realität können in Teilgebieten die Wassertiefen auf dem Gelände höher oder geringer ausfallen.
          Um diese Variationen zu verstehen und besser einschätzen zu können, sind zwei unterschiedliche Szenarien dargestellt.
          </p>
          <p>
            Durch Anklicken der Schaltfläche <Icon name="crosshairs" /> oberhalb
            des Kontrollfeldes aktivieren Sie abhängig von der eingestellten
            Kartenansicht (Wassertiefen oder Fließgeschwindigkeiten) den Modus
            zur <strong>Abfrage der maximalen Werte im Simulationszeitrahmen</strong>.
            Die Maximalwerte sind im Verlauf jeder Simulation für jede Zelle des Rechennetzes
            berechnet worden.
            Ein Klick auf eine beliebige Position in der Karte bewirkt jetzt,
            dass die Zelle in der Karte markiert und der zugehörige Maximalwert
            der Wassertiefe bzw. der Fließgeschwindigkeit in diesem Feld
            angezeigt wird. Die Anzeige der maximalen Wassertiefen wird dabei
            auf volle 10 cm gerundet (z. B. "ca. 20 cm"), um eine mögliche{" "}
            <a onClick={() => setAppMenuActiveMenuSection("aussagekraft")}>
              Varianz der Simulationsergebnisse
            </a>{" "}
            zu verdeutlichen. Aus demselben Grund werden berechnete Wassertiefen
            von mehr als 100 cm nur als "&gt; 100 cm" angezeigt. Bitte beachten
            Sie, dass in der online-Karte Wassertiefen kleiner als 5 cm
            transparent dargestellt sind, um die Aufmerksamkeit auf die
            kritischeren Bereiche zu lenken. Überflutungsgefahren können auch in
            anderen Bereichen vorliegen. Lokale Verhältnisse sind immer zu
            prüfen (inkl. der Grundstücksentwässerungsanlage). Die Anzeige der
            maximalen Fließgeschwindigkeiten erfolgt in der Einheit "Meter pro
            Sekunde" (m/s), gerundet auf eine Nachkommastelle.
            Fließgeschwindigkeiten von mehr als 1 Meter pro Sekunde werden als
            "&gt; 1 m/s" angezeigt.
          </p>
          <p>
            <b>Tipp für die Abfrage der maximalen Fließgeschwindigkeiten:</b>{" "}
            Deaktivieren Sie die{" "}
            <a onClick={() => setAppMenuActiveMenuSection("karteninhalt")}>
              Animation
            </a>{" "}
            und stellen Sie einen sehr großen Betrachtungsmaßstab ein (Zoomstufe
            21 oder 22). Dann wird Ihnen in der Kartendarstellung auch die zu
            der maximalen Fließgeschwindigkeit gehörende Fließrichtung
            zellenscharf angezeigt.
          </p>
          <p>
            Mit einem Klick auf das{" "}
            <Icon name="close" /> Symbol rechts oben im Anzeigefeld beenden Sie
            den Abfragemodus.
          </p>
        </div>
      }
    />
  );

};
export default Component;
