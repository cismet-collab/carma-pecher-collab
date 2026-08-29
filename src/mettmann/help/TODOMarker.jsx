import React from "react";

/**
 * Sichtbarer Platzhalter für noch nicht geklärte Inhalte.
 *
 * Bewusst auffällig, damit unvollständige Hilfetexte nicht versehentlich als
 * fertig durchgehen. Vor der Freigabe an den Kreis Mettmann müssen alle
 * Vorkommen verschwinden:
 *
 *   grep -rn "TODOMarker" src/mettmann
 */
const TODOMarker = ({ children }) => (
  <mark
    style={{
      display: "inline",
      backgroundColor: "#ffe066",
      color: "#8a1c1c",
      border: "1px solid #e03131",
      borderRadius: 3,
      padding: "0 4px",
      fontWeight: "bold",
    }}
  >
    [TODO: {children}]
  </mark>
);

export default TODOMarker;
