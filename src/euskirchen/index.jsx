import React from "react";
import Help05Introduction from "./help/Help05Introduction";
import Help10AllgemeineHinweise from "./help/Help10AllgemeineHinweise";
import Help15Datengrundlage from "./help/Help15Datengrundlage";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help60SimulierteSzenarien from "./help/Help60SimulierteSzenarien";
import Help70AussagekraftDerSimulationen from "./help/Help70AussagekraftDerSimulationen";
import Help80ModellfehlerMelden from "./help/Help80ModellfehlerMelden";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import Help98Kontakt from "./help/Help98Kontakt";
import Help99Footer from "./help/Help99Footer";

const getCollabedHelpComponentConfig = ({
  version,
  reactCismapRHMVersion,
  footerLogoUrl,
  email,
}) => {
  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help10AllgemeineHinweise key="AllgemeineHinweise" />,
    <Help15Datengrundlage key="Datengrundlage" />,
    <Help20Karteninhalt key="Karteninhalt" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help60SimulierteSzenarien key="SimulierteSzenarien" />,
    <Help70AussagekraftDerSimulationen key="AussagekraftDerSimulationen" />,
    <Help80ModellfehlerMelden key="ModellfehlerMelden" email={email} />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
    <Help98Kontakt key="Kontakt" email={email} />,
  ];
  const menuFooter = (
    <Help99Footer
      version={version}
      reactCismapRHMVersion={reactCismapRHMVersion}
      logoUrl={footerLogoUrl}
    />
  );
  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter,
  };
};

const textElementsForOverlays = {
  ergebnisse: (
    <span>
      Für dieses Gewässer bzw. diesen Bereich liegen auch Ergebnisse aus dem
      Hochwasserrisikomanagement vor. Die Hochwassergefahrenkarten sind zur
      Bewertung der Gefährdung heranzuziehen (
      <a
        target="_hochwassergefahrenkarten_nrw"
        href="https://www.flussgebiete.nrw.de/hochwassergefahrenkarten-und-hochwasserrisikokarten-8406"
      >
        weitergehende Informationen
      </a>
      )
    </span>
  ),
  massnahmeVeybach: (
    <span>
      In diesem Bereich wurde durch den Erftverband die Hochwasserschutzmaßnahme
      „Veybachausbau“ umgesetzt. Die umgesetzte Maßnahme konnte noch nicht in
      dem Modell zur Erstellung der Starkregengefahrenkarten abgebildet werden.
      Es werden sich daher bei Starkregen abweichende Überflutungsprozesse
      einstellen. Weiterhin liegen für dieses Gewässer Ergebnisse aus dem
      Hochwasserrisikomanagement vor, die zu beachten sind.
    </span>
  ),
  massnahmeRotbach: (
    <span>
      In diesem Bereich wurde durch den Erftverband die Hochwasserschutzmaßnahme
      „Rotbach-Umschluss“ umgesetzt. Die umgesetzte Maßnahme konnte noch nicht
      in dem Modell zur Erstellung der Starkregengefahrenkarten abgebildet
      werden. Es werden sich daher bei Starkregen abweichende
      Überflutungsprozesse einstellen. Weiterhin liegen für dieses Gewässer
      Ergebnisse aus dem Hochwasserrisikomanagement vor, die zu beachten sind.
    </span>
  ),
  stauanlagen: (
    <span>
      Zu dieser Anlage bzw. dem Einflussbereich können weitergehende
      Untersuchungen oder Ergebnisse aus dem Hochwasserrisikomanagement
      vorliegen, die bei der Bewertung zu berücksichtigen sind. Zudem haben die
      Vorbedingungen und die Bauwerkssteuerung einen Einfluss auf die
      Gefährdungssituation. Insbesondere dynamische und ungeplante Vorkommnisse
      (Verlegung, Verklausung etc.) wie beim Ereignis 2021 können derzeit im
      Modell nicht ausreichend abgebildet sein.
    </span>
  ),
  stauanlagenSteinbachtalsperre: (
    <span>
      Die Steinbachtalsperre wird im Modell gemäß der aktuellen Situation
      2022/2023 abgebildet. Zukünftige Planungen konnten noch nicht
      berücksichtigt werden. Das bedeutet, dass es keine Vorfüllung gibt und die
      Scharte im Damm abgebildet wird. Damit werden sich deutliche Abweichungen
      im Vergleich zu den bisherigen Erfahrungen ergeben.
    </span>
  ),
};

export { getCollabedHelpComponentConfig, textElementsForOverlays };
