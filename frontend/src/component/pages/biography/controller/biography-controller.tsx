import React from "react";
import DetailController from "./detail/detail-controller";
import "../style/biography.css";
import { jobContent } from "../content/job";
import { educationContent } from "../content/education";
import { skillContent } from "../content/skill";
import { interestContent } from "../content/interest";
import { languageContent } from "../content/language";
import { contactNavigation } from "../content/contact";
import NavigationController from "./navigation/navigation-controller";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export const BiographyController = () => <div className="controller">
  <div className="container">
    <NavigationController
      contactList={ contactNavigation }
      jobList={ jobContent }
      educationList={ educationContent }
      languageList={ languageContent } interestList={ [] }/>
    <DetailController
      jobList={ jobContent }
      educationList={ educationContent }
      skillList={ skillContent }
      interestList={ interestContent }
    />
  </div>
</div>;
