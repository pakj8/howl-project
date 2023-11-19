/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import LeftNavlinks from "../common/LeftNavlinks";
import StrategyAndConsulting from "./StrategyAndConsulting";
import OnlineMarketingExperience from "./OnlineMarketingExperience";
import CommerceSolution from "./CommerceSolution";
import GrowthMarketing from "./GrowthMarketing";
import AssetCreation from "./AssetCreation";

function MiddleComponent() {
  const strategyRef = useRef(null);
  const onlineMarketingRef = useRef(null);
  const commerceRef = useRef(null);
  const growthRef = useRef(null);
  const assetRef = useRef(null);
  const [componentsColor, setComponentsColor] = useState("");

  const [activeLinkId, setActiveLinkId] = useState(null);

  const links = [
    {
      label: "STRATEGY AND CONSULTING",
      ref: strategyRef,
      id: "strategy",
    },
    {
      label: "ONLINE MARKETING EXPERIENCE",
      ref: onlineMarketingRef,
      id: "online-marketing",
    },
    {
      label: "COMMERCE SOLUTIONS",
      ref: commerceRef,
      id: "commerceSolution",
    },
    {
      label: "GROWTH MARKETING",
      ref: growthRef,
      id: "growthsMarketing",
    },
    {
      label: "ASSET CREATION",
      ref: assetRef,
      id: "assetCreation",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffsets = links.map(({ ref, id }) => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            offset: rect.top,
          };
        }
        return null;
      });

      const visibleSection = scrollOffsets.find(
        (offset) =>
          offset && offset.offset >= 0 && offset.offset < window.innerHeight
      );

      if (visibleSection) {
        setActiveLinkId(visibleSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  return (
    <div className="sticky">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <LeftNavlinks
            links={links}
            activeLinkId={activeLinkId}
            setComponentsColor={setComponentsColor}
          />
        </div>
        <div className="col-span-6">
          <StrategyAndConsulting
            componentsColor={componentsColor}
            linkRef={strategyRef}
          />
          <OnlineMarketingExperience
            componentsColor={componentsColor}
            linkRef={onlineMarketingRef}
          />
          <CommerceSolution
            componentsColor={componentsColor}
            linkRef={commerceRef}
          />
          <GrowthMarketing
            componentsColor={componentsColor}
            linkRef={growthRef}
          />
          <AssetCreation componentsColor={componentsColor} linkRef={assetRef} />
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
