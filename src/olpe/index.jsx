import Help05Introduction from "./help/Help05Introduction";
// import Help10AllgemeineHinweise from "./help/Help10AllgemeineHinweise";
import Help10Datengrundlage from "./help/Help10Datengrundlage";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help40MeinStandort from "./help/Help40MeinStandort";
// import Help50WasserstandAbfragen from "./help/Help50WasserstandAbfragen";
import Help60SimulierteSzenarien from "./help/Help60SimulierteSzenarien";
import Help70AussagekraftDerSimulationen from "./help/Help70AussagekraftDerSimulationen";
import Help80ModellfehlerMelden from "./help/Help80ModellfehlerMelden";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
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
    <Help10Datengrundlage key="Datengrundlage" />,
    <Help20Karteninhalt
      key="Karteninhalt"
      simulationsklammer="Stärke 7, Stärke 10"
    />,
    <Help30InKartePositionieren key="key='InKartePositionieren'" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help60SimulierteSzenarien key="SimulierteSzenarien" />,
    <Help70AussagekraftDerSimulationen key="Aussagekraft" />,
    <Help80ModellfehlerMelden key="ModellfehlerMelden" email={email} />,
    <Help90Haftungsausschluss appName="AIS Olpe" key="Haftungsausschluss" />,
  ];
  const menuFooter = (
    <Help99Footer
      appName="AIS Olpe"
      hintergrundkartenText="DOP © Geobasis NRW | Stadtkarte 2.0 © RVR | WebAtlasDE © BKG"
      taglineModelling={
        <div>
          <b>Modellierung und AIS Starkregenvorsorge</b> (Version 1.0 |
          10/2021):{" "}
          <a target="_olpe" href="https://olpe.de/">
            Kreisstadt Olpe
          </a>{" "}
          |{" "}
          <a target="_pecher" href="https://www.pecher.de/">
            Dr. Pecher AG (Gelsenkirchen/Erkrath)
          </a>
        </div>
      }
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

export { getCollabedHelpComponentConfig };
