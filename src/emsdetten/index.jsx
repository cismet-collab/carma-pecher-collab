import React from "react";
import {} from "@cismet-collab/rainhazardmaps-base-texts";

import Help05Introduction from "./help/Help05Introduction";
import Help10AllgemeineHinweise from "./help/Help10AllgemeineHinweise";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help50WasserstandAbfragen from "./help/Help50WasserstandAbfragen";
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
    <Help20Karteninhalt key="Karteninhalt" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help50WasserstandAbfragen key="WasserstandAbfragen" />,
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
      taglineModelling={
        <div>
          <b>Modellierung (2016) und AIS Starkregenvorsorge</b> (Version 1.0 |
          07/2023):{" "}
          <a target="_wsw" href="https://cismet.de/">
            cismet GmbH
          </a>{" "}
          |{" "}
          <a target="_pecher" href="https://www.pecher.de/">
            Dr. Pecher AG (Gelsenkirchen/Erkrath)
          </a>
        </div>
      }
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

export { getCollabedHelpComponentConfig };
