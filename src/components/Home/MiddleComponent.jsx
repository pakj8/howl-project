/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import LeftNavlinks from "../common/LeftNavlinks";
import StrategyAndConsulting from "./StrategyAndConsulting";
import OnlineMarketingExperience from "./OnlineMarketingExperience";

function MiddleComponent() {
  const strategyRef = useRef(null);
  const onlineMarketingRef = useRef(null);
  const commerceRef = useRef(null);
  const growthRef = useRef(null);
  const assetRef = useRef(null);

  const [activeLinkId, setActiveLinkId] = useState(null);

  const links = [
    {
      label: "STRATEGY AND CONSULTING",
      ref: strategyRef,
      id: "strategy",
      color: "#860A35",
    },
    {
      label: "ONLINE MARKETING EXPERIENCE",
      ref: onlineMarketingRef,
      id: "online-marketing",
      color: "#FFC7C7",
    },
    {
      label: "COMMERCE SOLUTIONS",
      ref: commerceRef,
      id: "commerceSolution",
      color: "#ED9ED6",
    },
    {
      label: "GROWTH MARKETING",
      ref: growthRef,
      id: "growthsMarketing",
      color: "#C683D7",
    },
    {
      label: "ASSET CREATION",
      ref: assetRef,
      id: "assetCreation",
      color: "#7071E8",
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
          <LeftNavlinks links={links} activeLinkId={activeLinkId} />
        </div>
        <div className="col-span-6">
          <StrategyAndConsulting linkRef={strategyRef} />
          <OnlineMarketingExperience linkRef={onlineMarketingRef} />
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
