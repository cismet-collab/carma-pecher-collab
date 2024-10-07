import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { getCollabedHelpComponentConfig } from ".";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import footerLogoUrl from "./help/assets/Signet_AIS_RZ.png";

const meta: Meta = {
  title: "Paderborn",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const version = "0.test.0";
    const email = "starkregen@paderborn.de";

    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            version,
            reactCismapRHMVersion: "_",
            footerLogoUrl,
            email,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};
