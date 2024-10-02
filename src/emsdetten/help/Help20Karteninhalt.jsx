import React, { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="karteninhalt"
      sectionTitle="Karteninhalt auswählen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            <strong>Wassertiefen und Fließgeschwindigkeiten</strong>
          </p>
          <p>
            Mit der Schaltfläche{" "}
            <a>
              <Icon name="random" />
            </a>{" "}
            auf der rechten Seite der Titelzeile können Sie zwischen der Anzeige der
            maximalen Wassertiefen und der maximalen Fließgeschwindigkeiten im Simulationszeitraum wechseln.
          </p>
          <p>
            <strong>Starkregen-Simulation</strong>
          </p>
          <p>
            In der rechten unteren Ecke der Anwendung finden Sie das{" "}
            <b>Kontrollfeld</b>, mit dem Sie den weiteren Karteninhalt nach
            Ihren Wünschen festlegen können. Klicken Sie unter <b>Simulation</b>{" "}
            auf eine der zwei Schaltflächen, um die Starkregensimulation
            auszuwählen, die angezeigt werden soll (SRI 7, SRI 8).
            Details zu den Simulationsberechnungen finden Sie hier in der
            Kompaktanleitung unter{" "}
            <a onClick={() => setAppMenuActiveMenuSection("datengrundlage")}>
              Datengrundlagen
            </a>{" "}
            und{" "}
            <a onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              Simulierte Szenarien
            </a>
            .
          </p>
          <p>
            <strong>Hintergrundkarten</strong>
          </p>
          <p>
            Unter <b>Karte</b> können Sie aus drei verschiedenen
            Hintergrundkarten auswählen: aus einem Stadtplan (grau) auf Basis
            der OpenStreetMap, einer Luftbildkarte und der digitalen topographischen Karte.
            Näheres zu den Geodaten, die diesen Karten zu Grunde liegen, finden Sie ebenfalls unter{" "}
            <a onClick={() => setAppMenuActiveMenuSection("datengrundlage")}>
              Datengrundlagen
            </a>
            .
          </p>
          <p>
            <strong>Strömungsdarstellung</strong>
          </p>
          <p>
            Unter <b>Animation</b> finden Sie einen Wechselschalter zum An- und
            Ausschalten einer animierten Darstellung des Fließgeschehens
            (Strömungsdarstellung).
            Sie basiert auf den Maximalbeträgen der Geschwindigkeitsvektoren,
            die für jede Zelle des Rechennetzes im Verlauf einer
            Simulationsberechnung bestimmt wurden. Es wird der Abfluss in die
            Richtung animiert, in der sich die größte Geschwindigkeit einstellt.
            Die Animation steht nur bei der Betrachtung der Starkregengefahrenkarte
            in einem Detailmaßstab (Zoomstufen 18 bis 22) zur Verfügung, in den
            Übersichtsmaßstäben (Zoomstufen 17 und kleiner) wird sie automatisch
            ausgeblendet. Die Animation wird für jede Kartenansicht neu online
            berechnet, sodass die Anzeigegeschwindigkeit von der
            Internetübertragung abhängt. Wenn die Animation nicht angezeigt
            wird, werden in der Kartenansicht "max. Fließgeschwindigkeiten"
            in Detailmaßstäben (hier bis zur Zoomstufe 14) statische
            Fließrichtungspfeile eingeblendet, um die Hauptrichtungen des
            Oberflächenwasserabflusses zu visualisieren.
          </p>
          <p>
            <strong>Kontrollfeld</strong>
          </p>
          <p>
            Mit der
            Schaltfläche <Icon name="chevron-circle-down" /> rechts neben der
            Simulationsbezeichnung lässt sich das Kontrollfeld so verkleinern,
            dass nur noch die Legende und die Simulationsbezeichnung angezeigt
            werden - nützlich für mobile Endgeräte mit kleinem Display. Mit der
            Schaltfläche <Icon name="chevron-circle-up" /> können Sie das
            Kontrollfeld dann wieder vollständig einblenden.
          </p>
        </div>
      }
    />
  );
};
export default Component;
Component.defaultProps = {
  showModalMenu: () => {},
};
